import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;