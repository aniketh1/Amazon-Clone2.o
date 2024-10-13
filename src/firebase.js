// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBBj9xeZjsKnlaf3GDmKcznD_Uf11pnMbM",
    authDomain: "clone-2676d.firebaseapp.com",
    projectId: "clone-2676d",
    storageBucket: "clone-2676d.appspot.com",
    messagingSenderId: "223245048968",
    appId: "1:223245048968:web:83dc55e765336d4e0e133d",
    measurementId: "G-4RKP4C0B42"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {db,auth};