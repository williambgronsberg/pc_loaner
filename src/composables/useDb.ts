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
        const batch = writeBatch(db);
        const wsRef = doc(db, "workstations", record.workstation);
        batch.update(doc(db, "borrowRecords", record.id), {
          returnedAt: serverTimestamp(),
        });
        batch.update(wsRef, {
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

    batch.set(recordRef, {
      workstation: wsId,
      borrower: name,
      borrowedAt: serverTimestamp(),
      returnedAt: null,
      controllers: controllers ?? null,
    });

    await batch.commit();
  }

  async function returnWorkstation(wsId: string) {
    const wsRef = doc(db, "workstations", wsId);
    const snap = await getDoc(wsRef);
    if (!snap.exists()) return;

    const recordId = snap.data().currentBorrowRecord as string | null;
    const batch = writeBatch(db);

    batch.update(wsRef, {
      status: "available",
      borrower: null,
      borrowedAt: null,
      currentBorrowRecord: null,
    });

    if (recordId) {
      batch.update(doc(db, "borrowRecords", recordId), {
        returnedAt: serverTimestamp(),
        borrower: null,
      });
    }

    await batch.commit();
  }

  async function getHistory() {
    const now = Timestamp.now();
    const cutoff = new Timestamp(now.seconds - 86400, now.nanoseconds);

    const snapshot = await getDocs(collection(db, "borrowRecords"));
    const records: BorrowRecord[] = [];

    for (const d of snapshot.docs) {
      const record = { id: d.id, ...(d.data() as Omit<BorrowRecord, "id">) };
      const isExpired = record.borrowedAt && record.borrowedAt.toMillis() <= cutoff.toMillis();

      if (record.returnedAt) {
        if (isExpired) {
          try {
            await deleteDoc(d.ref);
          } catch {}
        } else {
          records.push(record);
        }
      }
    }

    records.sort((a, b) => (b.borrowedAt?.toMillis() ?? 0) - (a.borrowedAt?.toMillis() ?? 0));

    return records;
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

  async function removeWorkstation(name: string) {
    await deleteDoc(doc(db, "workstations", name));
  }

  async function updateWorkstation(
    oldName: string,
    data: { newName?: string; keyboard?: string; mouse?: string; accessories?: string; type?: WsType }
  ) {
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
    returnWorkstation,
    getHistory,
    seedDefaultWorkstations,
    addWorkstation,
    removeWorkstation,
    updateWorkstation,
  };
}
