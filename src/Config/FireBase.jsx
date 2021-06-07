import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWEkabXp373GFUeVYH8lMosj1MuXZoGpE",
    authDomain: "amazn-clone-mistudiosinc.firebaseapp.com",
    projectId: "amazn-clone-mistudiosinc",
    storageBucket: "amazn-clone-mistudiosinc.appspot.com",
    messagingSenderId: "113284846759",
    appId: "1:113284846759:web:a299870abaf71912cef782",
    measurementId: "G-LH0WDSKGJP"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();

export { database, authentication };
