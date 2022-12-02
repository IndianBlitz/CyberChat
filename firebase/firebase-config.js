
import { initializeApp } from 'firebase/app';

import { getAuth} from "firebase/auth";

import { doc, getFirestore,collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};





export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const querySnapshot = collection(db, "Users");


const querySnapshot = getDocs(collection(db, "Users"));















export const authentication = getAuth(app);
 






// const analytics = getAnalytics(app);



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// // console.log(firebase);
