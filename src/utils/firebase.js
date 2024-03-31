// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfh5nNplHhK6ced2Xvb4j_UzArwgPRtOw",
  authDomain: "netflix-gpt-c693c.firebaseapp.com",
  projectId: "netflix-gpt-c693c",
  storageBucket: "netflix-gpt-c693c.appspot.com",
  messagingSenderId: "1081625719482",
  appId: "1:1081625719482:web:a65e7b98885a2e42538883",
  measurementId: "G-F5HV2P5L1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);