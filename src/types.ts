import type { Timestamp } from "firebase/firestore";

export interface Workstation {
  id: string;
  name: string;
  keyboard: string;
  mouse: string;
  status: "available" | "borrowed";
  borrower: string | null;
  borrowedAt: Timestamp | null;
  currentBorrowRecord: string | null;
}

export interface BorrowRecord {
  id: string;
  workstation: string;
  borrower: string;
  borrowedAt: Timestamp;
  returnedAt: Timestamp | null;
}

export type ViewName = "student" | "login" | "admin";
export type TabName = "borrows" | "history" | "manage";
export type ToastType = "info" | "success" | "error";
