import {googleAuthProvider, firebase} from '../config/firebase';

const signInWithGoogle = async () => {
    //coloca el lenguaje de preferencia del dispositivo
    firebase.auth().useDeviceLanguage();

    //Inicio el procedo de login dentro de try ... catch
    try{
      await firebase.auth().signInWithPopup(googleAuthProvider);

    } catch (e) {
      console.error(e.message);
        }
  };

export default signInWithGoogle;