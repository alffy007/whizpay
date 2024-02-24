// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd0-Ysr6G7A4ae_5J_IwHjWhPCrD_9f0U",
  authDomain: "whizpay-99adf.firebaseapp.com",
  projectId: "whizpay-99adf",
  storageBucket: "whizpay-99adf.appspot.com",
  messagingSenderId: "303517427589",
  appId: "1:303517427589:web:a75d8ad936b155c64606ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
