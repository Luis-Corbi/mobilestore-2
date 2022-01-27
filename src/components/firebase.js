import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firebase } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbMLNvRPWQbJlOHcL1fxjWvuKvkfRM_VU",
    authDomain: "mobilestore-a01f5.firebaseapp.com",
    projectId: "mobilestore-a01f5",
    storageBucket: "mobilestore-a01f5.appspot.com",
    messagingSenderId: "567079825981",
    appId: "1:567079825981:web:40e7068ba9d647488e3054",
    measurementId: "G-ECY6SDLQ11"
};

const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const auth = Firebase.auth();

export {auth}