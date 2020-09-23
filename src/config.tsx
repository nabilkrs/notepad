import React from 'react';
import { Component } from 'react';
import firebase from 'firebase';
import firestore from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCX5FgLxIDsbz7WUUeDW0YIPVFT6kai1Zo",
    authDomain: "notepad-1c286.firebaseapp.com",
    databaseURL: "https://notepad-1c286.firebaseio.com",
    projectId: "notepad-1c286",
    storageBucket: "notepad-1c286.appspot.com",
    messagingSenderId: "597759631919",
    appId: "1:597759631919:web:f914acff8b7f2faa979cda",
    measurementId: "G-G7M3BXLB5T"
  };
  firebase.initializeApp(firebaseConfig);
  export const db=firebase.firestore();
 
 
  export default firebaseConfig;