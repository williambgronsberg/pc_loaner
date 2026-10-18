import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBQ1ZZnzS2tD4X1vXBruYomV0OoyaMwxRA",
  authDomain: "henryshus-db.firebaseapp.com",
  projectId: "henryshus-db",
  storageBucket: "henryshus-db.firebasestorage.app",
  messagingSenderId: "1088345673984",
  appId: "1:1088345673984:web:7e48ed5887c20d541323e5",
  measurementId: "G-NXXLZ1YQ3E",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
