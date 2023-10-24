import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLZY_eokYDhmAfFXnkf36QOcgyswCWQQM",
  authDomain: "br-website-1da49.firebaseapp.com",
  projectId: "br-website-1da49",
  storageBucket: "br-website-1da49.appspot.com",
  messagingSenderId: "573044299368",
  appId: "1:573044299368:web:96d34c9ab59d5225618ddd",
  measurementId: "G-PXRCFSM8T6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
