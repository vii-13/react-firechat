import {db, googleAuthProvider, firebase} from './config/firebase';
import Button from './componets/Button';
import {signInWithGoogle, signOut} from './login';
import sigInwithGoogle from './login/signInWithGoogle';


function App() {
// Renderizar el componente Button
  return (
    <div>
      {
        user ? (
          <>
          <Button onclick={signOut}> Sing in with Google</Button>
          <p>Bienvenido al CHAT</p>
          </>
        ) :<Button onClick={sigInwithGoogle}> Sing in with Google</Button>
      }

    </div>
  );
}

export default App;
