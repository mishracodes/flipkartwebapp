// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLaEnY8vGmepVOTSAIB4QWrQm4lz_fItA",
  authDomain: "flipkartwebapp.firebaseapp.com",
  projectId: "flipkartwebapp",
  storageBucket: "flipkartwebapp.appspot.com",
  messagingSenderId: "453050979185",
  appId: "1:453050979185:web:f8c8ff7c41a9dfc5a1dcd0",
  measurementId: "G-DSXM3RZXF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);