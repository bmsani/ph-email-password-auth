// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR8B941Bu2HX2oNIplfhyRJi_CdV137A0",
  authDomain: "ph-email-password-auth.firebaseapp.com",
  projectId: "ph-email-password-auth",
  storageBucket: "ph-email-password-auth.appspot.com",
  messagingSenderId: "677808262559",
  appId: "1:677808262559:web:64ba68c8d16bbc3af941aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;