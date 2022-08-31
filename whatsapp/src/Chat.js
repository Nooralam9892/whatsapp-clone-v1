import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import React, { useEffect, useState } from 'react'
import'./Chat.css';
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from './firebase';
import { useSatetValue } from './StateProvider';

function Chat() {
  
  const [input, setInput] = useState("");

  const {roomId}= useParams();
  const [roomName,setRoomName]= useState()
  const [messages,setMessages]= useState()
  const [{ user },dispatch]=useSatetValue()


  useEffect(()=>{
    if(roomId){
      db.collection('rooms')
      .doc(roomId)
      .onSnapshot((snapshot) =>setRoomName
      (snapshot.data().name));
      
      db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp","asc")
      .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=> doc.data()))
      );

    }
  },[roomId]);

  

  const sendMessage = (e) =>{
     e.preventDefault();
     console.log("You typed >>>",input);
    
     db.collection('rooms').doc(roomId).collection
     ('messages').add({
      message:input,
      name:user.displayName,
      timestamp: firebase.firestore.FeildValue.serverTimestamp(),
     });
   setInput("");
  };
  return (
    <div className='caht'>
        <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/:${Math.floor(Math.random()*5000)}.svg`}/>
        
        <div className='chat__headerInfo'>
        <h3>{roomName}</h3>
        <p>Last seen at...</p>
        </div>

        
        <div className='chat__searchRight'>
        <IconButton>
        <SearchOutlinedIcon/>
        </IconButton>
        
         <IconButton>
         <MoreVertIcon/>
         </IconButton>            
       </div>
      </div>

        <div className='chat__body'>
        {messages?.map((message) => (
        <p className={`chat__message  ${true && "chat__reciever"}`}>
        <span className='chat__name'>{message.name}</span>
        {message.message}
        <span className='chat__timestamp'> 
        {new Date(message.timestamp?.toDate()).toUTCString()} 
        </span>
        </p>
        
        ))}
        </div>
        <div className='chat__footer'>
        <IconButton>
         <InsertEmoticonIcon/>
         </IconButton>
         <IconButton>
        <AttachFileIcon/>
        </IconButton>
         <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type="text"/>
          <button  onClick={sendMessage} type='submit'>Send a message</button>
         </form>
         <IconButton>
         <SendSharpIcon/>
         </IconButton>
         <IconButton>
         <MicIcon/>
         </IconButton>
        </div>
    </div>
  )
}

export default Chat