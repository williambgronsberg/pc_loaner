import { ref, onUnmounted } from "vue";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  writeBatch,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  getDoc,
  deleteDoc,
  serverTimestamp,
  Timestamp,
  runTransaction,
  type DocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import type { Workstation, BorrowRecord, WsType } from "@/types";

export function useDb() {
  const workstations = ref<Workstation[]>([]);
  const activeBorrows = ref<BorrowRecord[]>([]);
  const loading = ref(false);

  let unsubWorkstations: (() => void) | null = null;
  let unsubBorrows: (() => void) | null = null;

  async function cleanupExpired() {
    const now = Timestamp.now();
    const cutoff = new Timestamp(now.seconds - 86400, now.nanoseconds);

    for (const record of activeBorrows.value) {
      if (record.borrowedAt && record.borrowedAt.toMillis() <= cutoff.toMillis()) {
        const workstationRef = doc(db, "workstations", record.workstation);
        const workstationSnapshot = await getDoc(workstationRef);
        if (
          workstationSnapshot.exists() &&
          workstationSnapshot.data().type === "controller" &&
          typeof workstationSnapshot.data().controllerCount === "number"
        ) {
          await runTransaction(db, async (transaction) => {
            const [pool, borrow] = await Promise.all([
              transaction.get(workstationRef),
              transaction.get(doc(db, "borrowRecords", record.id)),
            ]);
            if (!pool.exists() || !borrow.exists() || borrow.data().returnedAt) return;
            const borrowed = Number(pool.data().borrowedControllers ?? 0);
            const remainingBorrowed = Math.max(0, borrowed - Number(borrow.data().controllers ?? 0));
            transaction.update(workstationRef, {
              borrowedControllers: remainingBorrowed,
              status: Number(pool.data().controllerCount ?? 0) > remainingBorrowed ? "available" : "borrowed",
            });
            transaction.update(doc(db, "borrowRecords", record.id), {
              returnedAt: serverTimestamp(),
            });
          });
          continue;
        }

        const batch = writeBatch(db);
        batch.update(doc(db, "borrowRecords", record.id), {
          returnedAt: serverTimestamp(),
        });
        batch.update(workstationRef, {
          status: "available",
          borrower: null,
          borrowedAt: null,
          currentBorrowRecord: null,
        });
        await batch.commit();
      }
    }
  }

  function subscribeWorkstations() {
    if (unsubWorkstations) return;
    unsubWorkstations = onSnapshot(
      collection(db, "workstations"),
      (snapshot) => {
        const list: Workstation[] = [];
        snapshot.forEach((d) => {
          list.push({ id: d.id, ...(d.data() as Omit<Workstation, "id">) });
        });
        list.sort((a, b) => a.name.localeCompare(b.name, "nb"));
        workstations.value = list;
      },
      (err) => console.error("Workstations error:", err)
    );
  }

  function subscribeActiveBorrows() {
    if (unsubBorrows) return;
    const q = query(
      collection(db, "borrowRecords"),
      where("returnedAt", "==", null)
    );
    unsubBorrows = onSnapshot(
      q,
      (snapshot) => {
        const list: BorrowRecord[] = [];
        snapshot.forEach((d) => {
          list.push({ id: d.id, ...(d.data() as Omit<BorrowRecord, "id">) });
        });
        list.sort(
          (a, b) => (b.borrowedAt?.toMillis() ?? 0) - (a.borrowedAt?.toMillis() ?? 0)
        );
        activeBorrows.value = list;
        cleanupExpired();
      },
      (err) => console.error("Active borrows error:", err)
    );
  }

  onUnmounted(() => {
    if (unsubWorkstations) unsubWorkstations();
    if (unsubBorrows) unsubBorrows();
  });

  async function borrowWorkstation(
    wsId: string,
    name: string,
    phone: string,
    controllers?: number
  ) {
    const batch = writeBatch(db);
    const recordRef = doc(collection(db, "borrowRecords"));
    const wsRef = doc(db, "workstations", wsId);

    batch.update(wsRef, {
      status: "borrowed",
      borrower: name,
      borrowedAt: serverTimestamp(),
      currentBorrowRecord: recordRef.id,
    });

    const recordData: Record<string, any> = {
      workstation: wsId,
      borrower: name,
      phone,
      borrowedAt: serverTimestamp(),
      returnedAt: null,
      controllers: controllers ?? null,
      anonymizedAt: null,
    };

    batch.set(recordRef, recordData);

    await batch.commit();
  }

  async function borrowControllers(
    workstationId: string,
    count: number,
    name: string,
    phone: string
  ) {
    if (!Number.isInteger(count) || count < 1) {
      throw new Error("Ugyldig antall kontrollere");
    }

    await runTransaction(db, async (transaction) => {
      const workstationRef = doc(db, "workstations", workstationId);
      const workstation = await transaction.get(workstationRef);
      if (!workstation.exists() || workstation.data().type !== "controller") {
        throw new Error("Kontroller-enheten finnes ikke");
      }
      const data = workstation.data();
      const total = Number(data.controllerCount ?? 0);
      const borrowed = Number(data.borrowedControllers ?? 0);
      if (count > total - borrowed) {
        throw new Error("Ikke nok ledige kontrollere. Oppdater siden og prøv igjen.");
      }

      const recordRef = doc(collection(db, "borrowRecords"));
      transaction.update(workstationRef, {
        borrowedControllers: borrowed + count,
        status: "borrowed",
      });
      transaction.set(recordRef, {
        workstation: workstationId,
        borrower: name,
        phone,
        borrowedAt: serverTimestamp(),
        returnedAt: null,
        controllers: count,
        anonymizedAt: null,
      });
    });
  }

  async function returnWorkstation(wsId: string, recordId?: string) {
    const wsRef = doc(db, "workstations", wsId);
    const snap = await getDoc(wsRef);
    if (!snap.exists()) return;

    const ws = snap.data();
    const borrowRecordId = recordId ?? (ws.currentBorrowRecord as string | null);
    if (ws.type === "controller" && typeof ws.controllerCount === "number" && borrowRecordId) {
      await runTransaction(db, async (transaction) => {
        const recordRef = doc(db, "borrowRecords", borrowRecordId);
        const [poolSnapshot, recordSnapshot] = await Promise.all([
          transaction.get(wsRef),
          transaction.get(recordRef),
        ]);
        if (!poolSnapshot.exists() || !recordSnapshot.exists() || recordSnapshot.data().returnedAt) return;
        const borrowed = Number(poolSnapshot.data().borrowedControllers ?? 0);
        const count = Number(recordSnapshot.data().controllers ?? 0);
        const remainingBorrowed = Math.max(0, borrowed - count);
        transaction.update(wsRef, {
          borrowedControllers: remainingBorrowed,
          status: Number(poolSnapshot.data().controllerCount ?? 0) > remainingBorrowed ? "available" : "borrowed",
        });
        transaction.update(recordRef, { returnedAt: serverTimestamp() });
      });
      return;
    }

    const borrowerName = ws.borrower as string | null;
    const batch = writeBatch(db);

    batch.update(wsRef, {
      status: "available",
      borrower: null,
      borrowedAt: null,
      currentBorrowRecord: null,
    });

    if (borrowRecordId) {
      const updateData: Record<string, any> = {
        returnedAt: serverTimestamp(),
      };
      if (borrowerName) {
        updateData.borrower = borrowerName;
      }
      batch.update(doc(db, "borrowRecords", borrowRecordId), updateData);
    }

    await batch.commit();
  }

  async function getHistory() {
    const snapshot = await getDocs(collection(db, "borrowRecords"));
    const records: BorrowRecord[] = [];

    for (const d of snapshot.docs) {
      const record = { id: d.id, ...(d.data() as Omit<BorrowRecord, "id">) };

      if (record.returnedAt) {
        records.push(record);
      }
    }

    records.sort((a, b) => (b.borrowedAt?.toMillis() ?? 0) - (a.borrowedAt?.toMillis() ?? 0));

    return records;
  }

  async function anonymizeOldRecords() {
    const cutoff = Timestamp.fromMillis(Date.now() - 30 * 86400 * 1000);
    const snapshot = await getDocs(collection(db, "borrowRecords"));
    const batch = writeBatch(db);
    let count = 0;

    for (const d of snapshot.docs) {
      const data = d.data();
      if (
        data.returnedAt &&
        data.returnedAt.toMillis() <= cutoff.toMillis() &&
        !data.anonymizedAt
      ) {
        batch.update(d.ref, {
          borrower: "Anonymisert",
          phone: "",
          anonymizedAt: serverTimestamp(),
        });
        count++;
      }
    }

    if (count > 0) await batch.commit();
  }

  async function seedDefaultWorkstations() {
    const defaults: Array<{
      name: string;
      type: WsType;
      keyboard: string;
      mouse: string;
      accessories: string;
    }> = [
      { name: "PlayStation", type: "playstation", keyboard: "Kontroller x2", mouse: "", accessories: "" },
      { name: "PlayStation 2", type: "playstation", keyboard: "Kontroller x2", mouse: "", accessories: "" },
      { name: "PC 1", type: "pc", keyboard: "Keyboard 1", mouse: "Mouse 1", accessories: "Headset" },
      { name: "PC 2", type: "pc", keyboard: "Keyboard 2", mouse: "Mouse 2", accessories: "" },
      { name: "PC 3", type: "pc", keyboard: "Keyboard 3", mouse: "Mouse 3", accessories: "" },
    ];

    for (const ws of defaults) {
      const wsRef = doc(db, "workstations", ws.name);
      const snap = await getDoc(wsRef);
      if (snap.exists()) continue;
      await setDoc(wsRef, {
        name: ws.name,
        type: ws.type,
        keyboard: ws.keyboard,
        mouse: ws.mouse,
        accessories: ws.accessories,
        status: "available",
        borrower: null,
        borrowedAt: null,
        currentBorrowRecord: null,
      });
    }
  }

  async function addWorkstation(
    name: string,
    type: WsType,
    keyboard: string,
    mouse: string,
    accessories: string
  ) {
    await setDoc(doc(db, "workstations", name), {
      name,
      type,
      keyboard: keyboard || "",
      mouse: mouse || "",
      accessories: accessories || "",
      status: "available",
      borrower: null,
      borrowedAt: null,
      currentBorrowRecord: null,
    });
  }

  async function addControllers(count: number) {
    if (!Number.isInteger(count) || count < 1 || count > 100) {
      throw new Error("Antall kontrollere må være mellom 1 og 100");
    }

    const poolRef = doc(db, "workstations", "Kontrollere");
    await runTransaction(db, async (transaction) => {
      const snapshot = await transaction.get(poolRef);
      const data = snapshot.data();
      if (snapshot.exists() && data?.type !== "controller") {
        throw new Error("En annen enhet bruker navnet «Kontrollere»");
      }
      const borrowed = Number(data?.borrowedControllers ?? 0);
      if (count < borrowed) {
        throw new Error(`Det er allerede ${borrowed} kontrollere utlånt`);
      }
      transaction.set(poolRef, {
        name: "Kontrollere",
        type: "controller",
        keyboard: "",
        mouse: "",
        accessories: "",
        status: count > borrowed ? "available" : "borrowed",
        borrower: null,
        borrowedAt: null,
        currentBorrowRecord: null,
        controllerCount: count,
        borrowedControllers: borrowed,
      });
    });
  }

  async function removeWorkstation(name: string) {
    const workstationRef = doc(db, "workstations", name);
    const snapshot = await getDoc(workstationRef);
    if (snapshot.exists() && snapshot.data().type === "controller" && Number(snapshot.data().borrowedControllers ?? 0) > 0) {
      throw new Error("Kan ikke fjerne kontrollere mens noen er utlånt");
    }
    await deleteDoc(workstationRef);
  }

  async function updateWorkstation(
    oldName: string,
    data: { newName?: string; keyboard?: string; mouse?: string; accessories?: string; type?: WsType; controllerCount?: number; controllerName?: string }
  ) {
    if (data.controllerCount !== undefined || data.controllerName !== undefined) {
      const controllerCount = data.controllerCount;
      if (controllerCount !== undefined && (!Number.isInteger(controllerCount) || controllerCount < 1 || controllerCount > 100)) {
        throw new Error("Antall kontrollere må være mellom 1 og 100");
      }
      const controllerName = data.controllerName?.trim();
      if (data.controllerName !== undefined && !controllerName) {
        throw new Error("Navnet på kontroller-enheten kan ikke være tomt");
      }
      await runTransaction(db, async (transaction) => {
        const workstationRef = doc(db, "workstations", oldName);
        const snapshot = await transaction.get(workstationRef);
        if (!snapshot.exists() || snapshot.data().type !== "controller") {
          throw new Error("Kontroller-enheten finnes ikke");
        }
        const borrowed = Number(snapshot.data().borrowedControllers ?? 0);
        if (controllerCount !== undefined && controllerCount < borrowed) {
          throw new Error(`Det er allerede ${borrowed} kontrollere utlånt`);
        }
        const updateData: Record<string, unknown> = {};
        if (controllerCount !== undefined) {
          updateData.controllerCount = controllerCount;
          updateData.status = controllerCount > borrowed ? "available" : "borrowed";
        }
        if (controllerName) updateData.name = controllerName;
        transaction.update(workstationRef, updateData);
      });
      return;
    }

    const newName = data.newName?.trim();
    if (newName && newName !== oldName) {
      const oldSnap = await getDoc(doc(db, "workstations", oldName));
      if (!oldSnap.exists()) return;
      const oldData = oldSnap.data();
      await setDoc(doc(db, "workstations", newName), {
        ...oldData,
        name: newName,
        keyboard: data.keyboard ?? oldData.keyboard,
        mouse: data.mouse ?? oldData.mouse,
        accessories: data.accessories ?? oldData.accessories,
        type: data.type ?? oldData.type,
      });
      await deleteDoc(doc(db, "workstations", oldName));
    } else {
      const updateData: Record<string, any> = {};
      if (data.keyboard !== undefined) updateData.keyboard = data.keyboard;
      if (data.mouse !== undefined) updateData.mouse = data.mouse;
      if (data.accessories !== undefined) updateData.accessories = data.accessories;
      if (data.type !== undefined) updateData.type = data.type;
      await updateDoc(doc(db, "workstations", oldName), updateData);
    }
  }

  return {
    workstations,
    activeBorrows,
    loading,
    subscribeWorkstations,
    subscribeActiveBorrows,
    borrowWorkstation,
    borrowControllers,
    returnWorkstation,
    getHistory,
    anonymizeOldRecords,
    seedDefaultWorkstations,
    addWorkstation,
    addControllers,
    removeWorkstation,
    updateWorkstation,
  };
}
