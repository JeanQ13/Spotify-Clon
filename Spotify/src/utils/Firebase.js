  import firebase from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyBH2tz-Ctfa1iQUCcfUC6MlBQH_7YpL4Ww",
    authDomain: "spotify-dev-a3285.firebaseapp.com",
    databaseURL: "https://spotify-dev-a3285.firebaseio.com",
    projectId: "spotify-dev-a3285",
    storageBucket: "spotify-dev-a3285.appspot.com",
    messagingSenderId: "638822572395",
    appId: "1:638822572395:web:a23feefdcb3b2ae909ec2e"
  };

  export default firebase.initializeApp(firebaseConfig);