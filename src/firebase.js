import firebase from 'firebase/app'
import 'firebase/firestore'
import store from "./store";

const firebaseConfig = {
    apiKey: "AIzaSyDN1eUIxBMmTkbT1n_lUM_j20Z-ckYn1Gs",
    authDomain: "videochatmysterytales.firebaseapp.com",
    databaseURL: "https://videochatmysterytales.firebaseio.com",
    projectId: "videochatmysterytales",
    storageBucket: "videochatmysterytales.appspot.com",
    messagingSenderId: "915336612614",
    appId: "1:915336612614:web:7d4d9717eccfdc8a342c87",
    measurementId: "G-9Q93B7CM98"
};


// Get a Firestore instance
const fb = firebase
    .initializeApp(firebaseConfig);

fb.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

export const db =  fb.firestore();

