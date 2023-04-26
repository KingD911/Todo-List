// import firebase from 'firebase';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJkaNrMIcX6B98Reot-QlpyH7vCktm9JA",
  authDomain: "todo-db-81c13.firebaseapp.com",
  projectId: "todo-db-81c13",
  storageBucket: "todo-db-81c13.appspot.com",
  messagingSenderId: "695742036570",
  appId: "1:695742036570:web:dc249c660a838591a27663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
 /* eslint-disable */ 
const db = getFirestore(app);
const auth = getAuth(app)
export {db, auth};
