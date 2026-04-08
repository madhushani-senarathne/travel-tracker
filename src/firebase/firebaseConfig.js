// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚡ Replace the values below with your Firebase project info
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "travel-tracker-5fb4b.firebaseapp.com",
  projectId: "travel-tracker-5fb4b",
  storageBucket: "travel-tracker-5fb4b.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE",
};

const app = initializeApp(firebaseConfig);

// Firebase services you will use
export const auth = getAuth(app); // for login/signup
export const db = getFirestore(app); // for storing memories