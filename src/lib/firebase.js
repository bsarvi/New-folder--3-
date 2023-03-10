import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8Mk8qUPVwz3XIpMrwpev6ubvM1qYgvUQ",
  authDomain: "authentication-690d4.firebaseapp.com",
  projectId: "authentication-690d4",
  storageBucket: "authentication-690d4.appspot.com",
  messagingSenderId: "66518043555",
  appId: "1:66518043555:web:9481488f0824d2a2bc2816",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
