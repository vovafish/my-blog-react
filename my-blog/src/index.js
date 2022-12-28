import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBegL5UmohJKgr7P4d6bW1Et5svBOG2gwQ",
  authDomain: "my-react-blog-ef52c.firebaseapp.com",
  projectId: "my-react-blog-ef52c",
  storageBucket: "my-react-blog-ef52c.appspot.com",
  messagingSenderId: "1011590485162",
  appId: "1:1011590485162:web:b53dc986f9fd6346bbacd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
