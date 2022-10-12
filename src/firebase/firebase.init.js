// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5JGvS4Wiitlyi_iGshqd48x_1Oq6q73E",
  authDomain: "fir-practice-c621a.firebaseapp.com",
  projectId: "fir-practice-c621a",
  storageBucket: "fir-practice-c621a.appspot.com",
  messagingSenderId: "416861582488",
  appId: "1:416861582488:web:6849ae8c6a7cdecb424ced",
  measurementId: "G-WW76R2GT9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
