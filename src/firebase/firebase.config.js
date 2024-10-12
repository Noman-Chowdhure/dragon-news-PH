// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByKUVJXIpG-0a0HIG_B-eNdHdWlMEqY54",
  authDomain: "dragon-news-6a5ea.firebaseapp.com",
  projectId: "dragon-news-6a5ea",
  storageBucket: "dragon-news-6a5ea.appspot.com",
  messagingSenderId: "455232274466",
  appId: "1:455232274466:web:06f1a70b99c351fe0f4a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth