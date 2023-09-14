// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ3q35vxgS7c_zCa97yj5AHS3fHp87Fag",
  authDomain: "todo-app-with-firebase-a8fe9.firebaseapp.com",
  projectId: "todo-app-with-firebase-a8fe9",
  storageBucket: "todo-app-with-firebase-a8fe9.appspot.com",
  messagingSenderId: "1094517017141",
  appId: "1:1094517017141:web:3578a83aef706e6f23bf7c",
  measurementId: "G-HCTHD3YTV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
