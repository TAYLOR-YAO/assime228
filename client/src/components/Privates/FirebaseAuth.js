import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyBP8TXKKEmn8twubcAZq9dgQycPx-d14Q0",
  authDomain: "assime-228.firebaseapp.com",
  databaseURL: "https://assime-228.firebaseio.com",
  projectId: "assime-228",
  storageBucket: "assime-228.appspot.com",
  messagingSenderId: "657725804438"
};

  const initialized = firebase.initializeApp(config);

  export default initialized;