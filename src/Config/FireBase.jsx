import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

// firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyAMqAaiPohfojuQmHwgBREm9Re-dvumWac",
    authDomain: "kofabra-fb748.firebaseapp.com",
    databaseURL: "https://kofabra-fb748-default-rtdb.firebaseio.com",
    projectId: "kofabra-fb748",
    storageBucket: "kofabra-fb748.appspot.com",
    messagingSenderId: "444165624005",
    appId: "1:444165624005:web:00a77c1d848c2032e620ac",
    measurementId: "G-XMFYFQ9RTQ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
const authentication = firebaseApp.auth();

export { database, authentication };
