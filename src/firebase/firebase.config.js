// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMmYp6XmPLyYMd2732z8LR9PFtZfhxa0",
  authDomain: "auth-moha-milon-f6d98.firebaseapp.com",
  projectId: "auth-moha-milon-f6d98",
  storageBucket: "auth-moha-milon-f6d98.appspot.com",
  messagingSenderId: "1072379362955",
  appId: "1:1072379362955:web:da3c2642fc98c020ff5e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;