// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfvEd9kczBcAhVyUUVseyQNBtKnFZL0iQ",
  authDomain: "inventory-management-aaedf.firebaseapp.com",
  projectId: "inventory-management-aaedf",
  storageBucket: "inventory-management-aaedf.appspot.com",
  messagingSenderId: "465924757408",
  appId: "1:465924757408:web:997379da5b7662e899b6c5",
  measurementId: "G-8Q68N05GK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
