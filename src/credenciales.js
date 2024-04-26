// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_FHiimc0oyryKGYKlYILsh-4wtNDKrLM",
  authDomain: "ingresar-dato-gestionconfig.firebaseapp.com",
  projectId: "ingresar-dato-gestionconfig",
  storageBucket: "ingresar-dato-gestionconfig.appspot.com",
  messagingSenderId: "673823849722",
  appId: "1:673823849722:web:a5f8636cc7ce35c95a1d43"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase