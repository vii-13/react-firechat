import { Button, Channel } from "./componets";
import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";

function App() {
  //Entegracion del hook useAuthState
  const { user, initializing } = useAuthState(firebase.auth());
  // Renderizar el componente Button
  //Renderezar en funcion de la existencia de un usuario con operador ternario.
  const renderLoging = () => {
    if (initializing) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  };
  return (
    <div className="App">
      {user ? (
        <>
          {/* <Button onClick={signOut}> Logout Google</Button> */}
          <Channel user={user} />
        </>
      ) : (
        <div className="shadow-lg p-3 mb-5 bg-body rounded inicio">
          <h1>🔥 React FireChat</h1>
          <h3>La forma más fácil de chatear con personas de todo el mundo</h3>
          <br />
          <Button onClick={signInWithGoogle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>{" "}
            Sing in with Google
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
