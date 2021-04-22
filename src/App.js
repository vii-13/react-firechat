import Button from './componets/Button';
import {signInWithGoogle, signOut} from './login';
import { useAuthState } from './hooks';
import { firebase } from './config/firebase';

function App() {
//Entegracion del hook useAuthState
  const { user, initializing }= useAuthState(firebase.auth());
// Renderizar el componente Button
  return (
    <div>
      {
        user ? (
          <>
          <Button onClick={signOut}> Sing in with Google</Button>
          <p>Bienvenido al CHAT</p>
          </>
        ) :<Button onClick={signInWithGoogle}> Sing in with Google</Button>
      }

    </div>
  );
}

export default App;
