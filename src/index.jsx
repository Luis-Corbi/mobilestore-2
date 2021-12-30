import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbMLNvRPWQbJlOHcL1fxjWvuKvkfRM_VU",
  authDomain: "mobilestore-a01f5.firebaseapp.com",
  projectId: "mobilestore-a01f5",
  storageBucket: "mobilestore-a01f5.appspot.com",
  messagingSenderId: "567079825981",
  appId: "1:567079825981:web:40e7068ba9d647488e3054",
  measurementId: "G-ECY6SDLQ11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
