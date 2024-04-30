
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoOwiJIzgqemdeHgCZQ65tUv7_yk-6xGo",
    authDomain: "it35-bf233.firebaseapp.com",
    projectId: "it35-bf233",
    storageBucket: "it35-bf233.appspot.com",
    messagingSenderId: "357983546310",
    appId: "1:357983546310:web:4d3bf0d887d8b8051de0c7",
    measurementId: "G-XRXQJ65Q40"
  };
// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}
