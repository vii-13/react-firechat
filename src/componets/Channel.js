import { useEffect } from "react";

const Channel = ({ user = null }) => {
    const [messages, setMessages] = useState ([]);

    //Necesito cargar los mensajes desde la BD
    useEffect(() => {
        /*
        crear el query de los mensajes.
        cargar los 100 mensajes ordenados por fecha.
        */
       const query = db.collection('messages')
       .orderBy('createdAt')
       .limit(100);
       const unsubscribe = query.onSnapshot(querysnapshot => {
           //obtiene todos los mensajes desde la bd con su ID.
        const data = querysnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        });
        //cleanup
        return unsubscribe;
           }, [])
    }
    )

    return <ul></ul>
};

export default Channel;