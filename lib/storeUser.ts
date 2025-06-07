import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  // your firebase config here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function storeUser({ name, email, password }: { name: string; email: string; password: string }) {
  await addDoc(collection(db, "users"), { name, email, password });
}