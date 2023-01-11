// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQaZVw2tgDDzZio6bALR1sbjS8DO6Hfbc",
  authDomain: "chat-63ca8.firebaseapp.com",
  projectId: "chat-63ca8",
  storageBucket: "chat-63ca8.appspot.com",
  messagingSenderId: "959698449125",
  appId: "1:959698449125:web:246560ab1e80a2ae3c1a0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
