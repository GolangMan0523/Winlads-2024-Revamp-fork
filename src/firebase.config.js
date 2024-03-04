// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    apiKey: "AIzaSyDUv9uGRhUCWSGIykhlVQ2IursAb8Zu5Ak",
    // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    authDomain: "winland-58673.firebaseapp.com",
    // projectId: import.meta.env.VITE_PROJECT_ID,
    projectId: "winland-58673",
    // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    storageBucket: "winland-58673.appspot.com",
    // messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
    messagingSenderId: "351741739115",
    // appId: import.meta.env.VITE_APP_ID,
    appId: "1:351741739115:web:e85bc92964d6414448312e",
    // measurementId: import.meta.env.VITE_MEASUREMENT_ID,
    measurementId: "G-PLM4GNET87"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// let auth = firebase.auth();
export const auth = getAuth(app);
export const storage = getStorage(app)
export default app;
