

import { useEffect, useState } from "react";
import { db, firebase } from "../config/firebase";
import Message from './Message';

const Channel = ({ user = null }) => {
  const [messages, setMessages] = useState([]);

  //Necesito cargar los mensajes desde la BD
  useEffect(() => {
  /*
  Crear el query de los mensajes,
  Cargar 100 mensajes ordenados por fecha.
  */
 const query = db.collection('messages')
 .orderBy('createdAt')
 .limit(100);

 const unsuscribe = query.onSnapchat(querySnapshot => {
   
  //Obtiene todos los mensajes desde la bd con su ID.
   const data= querySnapshot.docs.map(doc => ({
     ...doc.data(),
     id: doc.id,
   }));
   //Actualizo os mensajes obtenidos desde la bd.
   setMessage(data);
   });
    //CleanUp
    return ununsubcribe;

   }, []) 

   //Codigo para agregar nuevos mensajes
    const { uid, displayName, photoURL} = user; 
     const [newMessage, setNewMessage] = useState('');

     const handleMessageOnChange = (e) => {
       e.preventDefault();
       setNewMessage(e.target.value);
     }
     const messagesRef = db.collection ('menssage');
     
     const handleOnSubmit = e => {
       e.preventDefault();

       const trimmedMessage = newMessage.trim();
       if(trimmedMessage) {
         //Add new message in Firestore
         messagesRef.add({
           text: trimmedMesaage,
           createdAt: firebase.firestore.FieldValue.serverTimestamp(),
           uld,
           displayName,
           photoURL,
         });
         //Clear input field
         setNewMessage('');
       }
     };
     const inputRef = useRef();
     useEffect (() => {
       if (inputRef.current){
         inputRef.current.focus();
       }
     }, [inputRef]);
     return ( 
       <>
       <ul>
         {messages.map(message => (
         <li key={message.id}>
           <Message {...message} />
         </li>
         ))}
         </ul>

         <form 
         onSubmit={handleOnSubmit}>
           <input 
           ref={inputRef}
           type="text"
           value={newMessage}
           onChange={handleMessageOnChange}
           placeholder="Escribe tu mensaje aquí..."
           />
           <button 
           type="submit"
           disabled={!newMessage}
           >
               Send
           </button>
           </form>
           </>
                  );
        };
           export default Channel;