import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvNiDkYJ8gw_WhZWDnUlDzapjp8YavPR4",
    authDomain: "friend-test-4d2bc.firebaseapp.com",
    projectId: "friend-test-4d2bc",
    storageBucket: "friend-test-4d2bc.appspot.com",
    messagingSenderId: "569273434199",
    appId: "1:569273434199:web:e534cea111fba52213e312",
    measurementId: "G-CESX1W6GCN"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };

