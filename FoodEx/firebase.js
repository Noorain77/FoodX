import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDErbZT-k5cIypY7m8oV_X7avAptbhoFLw",
  authDomain: "foodex-a7265.firebaseapp.com",
  databaseURL: "https://foodex-a7265-default-rtdb.firebaseio.com",
  projectId: "foodex-a7265",
  storageBucket: "foodex-a7265.appspot.com",
  messagingSenderId: "962054151565",
  appId: "1:962054151565:web:0cf862a3095f3a020731c4"
};

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const database = firebase.database()

export {auth, database}