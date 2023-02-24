// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzKGaqr2bi6WQzn8ckKc_JK5naeA10Cwc",
  authDomain: "registration-49c39.firebaseapp.com",
  projectId: "registration-49c39",
  storageBucket: "registration-49c39.appspot.com",
  messagingSenderId: "32771159885",
  appId: "1:32771159885:web:61384b4d44cf4e22d86904",
  measurementId: "G-L8SCNC7G5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)