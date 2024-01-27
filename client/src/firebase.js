// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBAS_API_KEY,
  authDomain: "mern-blog-1217d.firebaseapp.com",
  projectId: "mern-blog-1217d",
  storageBucket: "mern-blog-1217d.appspot.com",
  messagingSenderId: "964625084475",
  appId: "1:964625084475:web:ba4f3641a5c62e6e766c1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);