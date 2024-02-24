import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0rpJS-BNycR0geFNC1DlPhdlYYVAKRjY",
    authDomain: "superchat-d4bae.firebaseapp.com",
    projectId: "superchat-d4bae",
    storageBucket: "superchat-d4bae.appspot.com",
    messagingSenderId: "1052098729067",
    appId: "1:1052098729067:web:8d2c9e0fce1a7d1aa0cd2e"
};

//initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();