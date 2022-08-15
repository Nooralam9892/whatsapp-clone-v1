import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDPKyqD2q7UEFV-eOTYjFvuc7ty4gKuytc",
  authDomain: "whatsapp-clone-d3b07.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-d3b07-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-d3b07",
  storageBucket: "whatsapp-clone-d3b07.appspot.com",
  messagingSenderId: "830782255491",
  appId: "1:830782255491:web:866e522d81bbd9b10206b6",
  measurementId: "G-YD28E9WH4W",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;