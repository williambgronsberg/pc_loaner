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
  type DocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import type { Workstation, BorrowRecord } from "@/types";

export function useDb() {
  const workstations = ref<Workstation[]>([]);
  const activeBorrows = ref<BorrowRecord[]>([]);
  const loading = ref(false);

  let unsubWorkstations: (() => void) | null = null;
  let unsubBorrows: (() => void) | null = null;

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
      },
      (err) => console.error("Active borrows error:", err)
    );
  }

  onUnmounted(() => {
    if (unsubWorkstations) unsubWorkstations();
    if (unsubBorrows) unsubBorrows();
  });

  async function borrowWorkstation(wsId: string, name: string) {
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
      });
    }

    await batch.commit();
  }

  async function getHistory(
    pageSize = 20,
    lastDoc?: DocumentSnapshot | null
  ) {
    let q = query(
      collection(db, "borrowRecords"),
      orderBy("borrowedAt", "desc"),
      limit(pageSize)
    );
    if (lastDoc) q = query(q, startAfter(lastDoc));

    const snapshot = await getDocs(q);
    const records: BorrowRecord[] = [];
    let lastVisible: DocumentSnapshot | null = null;

    snapshot.forEach((d) => {
      records.push({ id: d.id, ...(d.data() as Omit<BorrowRecord, "id">) });
      lastVisible = d;
    });

    return { records, lastVisible };
  }

  async function seedDefaultWorkstations() {
    const snap = await getDocs(query(collection(db, "workstations"), limit(1)));
    if (!snap.empty) return;

    const defaults = [
      { name: "PC 1", keyboard: "Keyboard 1", mouse: "Mouse 1" },
      { name: "PC 2", keyboard: "Keyboard 2", mouse: "Mouse 2" },
      { name: "PC 3", keyboard: "Keyboard 3", mouse: "Mouse 3" },
    ];

    for (const ws of defaults) {
      await setDoc(doc(db, "workstations", ws.name), {
        ...ws,
        status: "available",
        borrower: null,
        borrowedAt: null,
        currentBorrowRecord: null,
      });
    }
  }

  async function addWorkstation(
    name: string,
    keyboard: string,
    mouse: string
  ) {
    await setDoc(doc(db, "workstations", name), {
      name,
      keyboard: keyboard || "",
      mouse: mouse || "",
      status: "available",
      borrower: null,
      borrowedAt: null,
      currentBorrowRecord: null,
    });
  }

  async function removeWorkstation(name: string) {
    await deleteDoc(doc(db, "workstations", name));
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
  };
}
