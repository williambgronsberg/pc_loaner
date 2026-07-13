import type { Timestamp } from "firebase/firestore";

export type WsType = "pc" | "playstation";

export interface Workstation {
  id: string;
  name: string;
  type: WsType;
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
  controllers?: number;
}

export type ViewName = "student" | "login" | "admin";
export type TabName = "borrows" | "history" | "manage";
export type ToastType = "info" | "success" | "error";
