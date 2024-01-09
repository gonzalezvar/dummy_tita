// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZxesiliOi5kPIJWzg833YyFOVolDwgM4",
  authDomain: "testtita-561a9.firebaseapp.com",
  projectId: "testtita-561a9",
  storageBucket: "testtita-561a9.appspot.com",
  messagingSenderId: "277290557424",
  appId: "1:277290557424:web:d2a99f844d2e13daf64735"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );