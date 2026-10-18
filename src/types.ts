import type { Timestamp } from "firebase/firestore";

export type WsType = "pc" | "playstation" | "controller";

export interface Workstation {
  id: string;
  name: string;
  type: WsType;
  keyboard: string;
  mouse: string;
  accessories: string;
  status: "available" | "borrowed";
  borrower: string | null;
  borrowedAt: Timestamp | null;
  currentBorrowRecord: string | null;
  controllerCount?: number;
  borrowedControllers?: number;
}

export interface BorrowRecord {
  id: string;
  workstation: string;
  borrower: string;
  phone: string;
  borrowedAt: Timestamp;
  returnedAt: Timestamp | null;
  controllers?: number;
  anonymizedAt?: Timestamp | null;
}

export type ViewName = "student" | "login" | "admin";
export type TabName = "borrows" | "history" | "manage";
export type ToastType = "info" | "success" | "error";
