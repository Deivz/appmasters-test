import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3I92NPp4mMuL1BCSlR4fs5bXEHlPt6T8",
  authDomain: "appmasters-test.firebaseapp.com",
  projectId: "appmasters-test",
  storageBucket: "appmasters-test.appspot.com",
  messagingSenderId: "537539760401",
  appId: "1:537539760401:web:aaa7de4c72b94a9d067cb0",
  measurementId: "G-54FDT0KX6B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const gamesCollectionRef = collection(db, 'games');
