// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS9LpdRw76FMtn8JabRk7sNQ5bQbC19oU",
  authDomain: "the-dragon-news-projects.firebaseapp.com",
  projectId: "the-dragon-news-projects",
  storageBucket: "the-dragon-news-projects.appspot.com",
  messagingSenderId: "267535676882",
  appId: "1:267535676882:web:739a45bcf8543ff4edc40b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app