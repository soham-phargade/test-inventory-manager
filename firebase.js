// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZynLi53ZnBILwSUdWyUZMT9PhwzL5-ik",
  authDomain: "inventory-management-48f79.firebaseapp.com",
  projectId: "inventory-management-48f79",
  storageBucket: "inventory-management-48f79.appspot.com",
  messagingSenderId: "813105463079",
  appId: "1:813105463079:web:e71bf5dcbe5a8dfd21f302",
  measurementId: "G-7WX8JFQJP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}