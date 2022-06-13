// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsWabw6yxyeX7kjLuSANhXdF1Q2Vmm-rE",
    authDomain: "independent-service-prov-b72f0.firebaseapp.com",
    projectId: "independent-service-prov-b72f0",
    storageBucket: "independent-service-prov-b72f0.appspot.com",
    messagingSenderId: "859333395900",
    appId: "1:859333395900:web:de93766efeb532840297b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;