import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCrU2CJ2rJVTwIYROyKJUV4E27-JeWw1vQ",
  authDomain: "reddit-election.firebaseapp.com",
  databaseURL: "https://reddit-election.firebaseio.com",
  projectId: "reddit-election",
  storageBucket: "reddit-election.appspot.com",
  messagingSenderId: "726052322507"
};

firebase.initializeApp(config);



export const fb = firebase.database().ref('/candidates');
