import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVVDMQGN5voE9rr_HxhEqd8Yehe8u3d3Q",
  authDomain: "chat-c8ab1.firebaseapp.com",
  projectId: "chat-c8ab1",
  storageBucket: "chat-c8ab1.appspot.com",
  messagingSenderId: "589457920599",
  appId: "1:589457920599:web:b9460954b81764cc7a0912",
  measurementId: "G-G3J856M61G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()