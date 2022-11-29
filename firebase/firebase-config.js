
import { initializeApp } from 'firebase/app';

import { getAuth} from "firebase/auth";

import { doc, getFirestore,collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDB1Z7NN5JBeOmc7AeouAMIhUF3GqeFpCA",
  authDomain: "cyberchat-7382d.firebaseapp.com",
  projectId: "cyberchat-7382d",
  storageBucket: "cyberchat-7382d.appspot.com",
  messagingSenderId: "704475101117",
  appId: "1:704475101117:web:a42c05bb2d53b1c959c4d4",
  measurementId: "G-F5GQQYD94G"
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