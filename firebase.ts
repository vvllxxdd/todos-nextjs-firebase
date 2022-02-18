// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "todo-nest-firebase.firebaseapp.com",
  projectId: "todo-nest-firebase",
  storageBucket: "todo-nest-firebase.appspot.com",
  messagingSenderId: "205939314576",
  appId: "1:205939314576:web:d0a0c464ca9ff73ce96d15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
