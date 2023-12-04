import "./App.css";
import Homepage from "./pages/home-page/home-page";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwD4i6fKTw2aF65LjDnyvZE5QbhCH8Yws",
  authDomain: "weightliftr-f207e.firebaseapp.com",
  projectId: "weightliftr-f207e",
  storageBucket: "weightliftr-f207e.appspot.com",
  messagingSenderId: "774038886109",
  appId: "1:774038886109:web:8f5b2b0dbb72f9476bed34",
  measurementId: "G-T6VWNMVS02",
};

// Initialize Firebase

function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
