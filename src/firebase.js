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
  apiKey: "AIzaSyCyhfEO8lF0L4PMS1LllWboKQqEL9jKmyM",
  authDomain: "kustbooklet-f8a99.firebaseapp.com",
  projectId: "kustbooklet-f8a99",
  storageBucket: "kustbooklet-f8a99.appspot.com",
  messagingSenderId: "474979494112",
  appId: "1:474979494112:web:055afdbfb048f52a1f0885",
  measurementId: "G-73ZGJVVTW6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//this is my writng 
// can you see my handwritting hello from firebase