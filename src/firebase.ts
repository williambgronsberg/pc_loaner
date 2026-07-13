import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",
  authDomain: "henryshus.firebaseapp.com",
  projectId: "henryshus",
  storageBucket: "henryshus.firebasestorage.app",
  messagingSenderId: "877597619520",
  appId: "1:877597619520:web:61e33ff74b9f03aa45f6a5",
  measurementId: "G-ESKWZ556XM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
