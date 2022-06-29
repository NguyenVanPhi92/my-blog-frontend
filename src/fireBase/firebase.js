// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOnw7sss_2SjQ3KKYazvEpsZiGrEyzj60",
  authDomain: "auth-b7edb.firebaseapp.com",
  projectId: "auth-b7edb",
  storageBucket: "auth-b7edb.appspot.com",
  messagingSenderId: "331832642516",
  appId: "1:331832642516:web:fd511a83e777a8bd7ea441",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
