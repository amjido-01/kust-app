// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_GaERf1z5C-1pJpk6sTvLFft1hS7lz0c",
  authDomain: "example-fcfe2.firebaseapp.com",
  projectId: "example-fcfe2",
  storageBucket: "example-fcfe2.appspot.com",
  messagingSenderId: "795096495577",
  appId: "1:795096495577:web:4ab00dbcefd5eff43e15c8",
  measurementId: "G-ES8S1ZQ77X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//this is my writng 
// can you see my handwritting hello from firebase