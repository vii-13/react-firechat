function useAuthState(auth) {
    const [Initializing, setInitializing]= useState(true);
    const[user, setUser]= useSatet(() => auth.currentUser);

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

return {user, inicializing};

}

export default useAuthState;