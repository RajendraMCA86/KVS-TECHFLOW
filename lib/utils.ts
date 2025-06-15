import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config here
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function testFirestoreConnection() {
  try {
    // Try to read from a test collection
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("Firestore connection successful. Documents found:", querySnapshot.size);
    return true;
  } catch (error) {
    console.error("Firestore connection failed:", error);
    return false;
  }
}
