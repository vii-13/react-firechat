import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//inicializar farebase  
const firebaseConfig = {
    apiKey: "AIzaSyCPTG8IYFz5XHvu3PKv72RQEkRFTpVmM_g",
    authDomain: "firechat-test-73281.firebaseapp.com",
    projectId: "firechat-test-73281",
    storageBucket: "firechat-test-73281.appspot.com",
    messagingSenderId: "357317668600",
    appId: "1:357317668600:web:f3fc653b583c39e78e550d",
    measurementId: "G-J0CBREM2GG"
  };
   firebase.initializeApp(firebaseConfig);

   //Tomo los elementos basicos para trabajar con firebase.

   const db = firebase.firestore();
   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
   
   export {
       db,
       googleAuthProvider,
       firebase
   }