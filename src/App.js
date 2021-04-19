import {db, googleAuthProvider, firebase} from './config/firebase';
import Button from './componets/Button';


function App() {
  
  const sigInwithGoogle = async () => {
    //coloca el lenguaje de preferencia del dispositivo
    firebase.auth().useDeviceLanguage();

    //Inicio el procedo de login dentro de try ... catch
    try{
      await firebase.auth().signInWithPopup(googleAuthProvider);

    } catch (e) {
      console.error(e.message);
        }
  };

// Renderizar el componente Button
  return (
    <div>
      <button onClick={sigInwithGoogle}> Sing in with Google</button>
    </div>
  );
}

export default App;
