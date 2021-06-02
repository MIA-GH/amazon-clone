import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcs5HrqVRU9SMG6avxwfDjK1vw6SFOzsM",
    authDomain: "amaz-clone-miastudios.firebaseapp.com",
    projectId: "amaz-clone-miastudios",
    storageBucket: "amaz-clone-miastudios.appspot.com",
    messagingSenderId: "100640856048",
    appId: "1:100640856048:web:f4f4383b9750e4d463ef35",
    measurementId: "G-W4XZE9JPP2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();

export { database, authentication };
