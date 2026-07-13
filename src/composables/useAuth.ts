import { ref, onUnmounted } from "vue";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth } from "@/firebase";

const currentUser = ref<User | null>(null);

let unsub: (() => void) | null = null;

export function useAuth() {
  if (!unsub) {
    unsub = onAuthStateChanged(auth, (user) => {
      currentUser.value = user;
    });
  }

  onUnmounted(() => {
    if (unsub) {
      unsub();
      unsub = null;
    }
  });

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    await signOut(auth);
  }

  function isAdmin(): boolean {
    return currentUser.value !== null;
  }

  return { currentUser, login, logout, isAdmin };
}
