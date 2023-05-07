// Import the functions you need from the SDKs you need
import "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/storage";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAPFYCu6BEDHsGGd0uat1NHV2RJ5FPxGM",
  authDomain: "pdf-files-upload-77887.firebaseapp.com",
  projectId: "pdf-files-upload-77887",
  storageBucket: "pdf-files-upload-77887.appspot.com",
  messagingSenderId: "988829754053",
  appId: "1:988829754053:web:6adadd2c4adb27a3f706ac",
  measurementId: "G-XVVNFX0H8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;