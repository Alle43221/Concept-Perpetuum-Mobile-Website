import {initializeApp, FirebaseOptions} from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBDEn6llG4J62GcDSsJR0-Btl8Xw1G8Ezc",
    authDomain: "website-fdc8d.firebaseapp.com",
    projectId: "website-fdc8d",
    storageBucket: "website-fdc8d.appspot.com",
    messagingSenderId: "727684527997",
    appId: "1:727684527997:web:28ab08832f547cc1753e14",
    measurementId: "G-CPRTLG48VT"
};

export const app = initializeApp(firebaseConfig);
