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
        }));

        //Actualizo los mensajes ontenidos desde la bd.
setMessages(data);

        });
        //cleanup
        return unsubscribe;

           }, [])
    

    return <ul>
        { messages.map(messages => (
            //Todos los mensajes seran mostrados en una lista.
            <li key={messages.id}>{messages.text}</li>
        ))}
    </ul>;

};

export default Channel;