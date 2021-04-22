import { useState, useEffect } from 'react'; 

function useAuthState(auth) {
    const [initializing]= useState(true);
    const[user, setUser]= useState(() => auth.currentUser);

useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user =>{
        if (user) {
            setUser(user);
        }else {
            setUser(false);
        }

    });
//Cleanup subdscription
return unsubcribe;
    
},[auth, initializing]);

return {user, initializing};

}

export default useAuthState;