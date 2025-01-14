// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU5EQQ8QlmwrM_h77JWXz1TMmtb_HS-5U",
  databaseURL: "https://coming-soon-1a3ac-default-rtdb.firebaseio.com/",
  authDomain: "coming-soon-1a3ac.firebaseapp.com",
  projectId: "coming-soon-1a3ac",
  storageBucket: "coming-soon-1a3ac.firebasestorage.app",
  messagingSenderId: "708697975765",
  appId: "1:708697975765:web:43e143a247f22583302b5c",
  measurementId: "G-J749CH0RS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export { database };


