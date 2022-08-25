import React, { useState,useEffect} from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from "@mui/material"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from'./firebase';
import { useSatetValue } from './StateProvider';


function Sidebar() {
  const [rooms,setRooms]= useState([]);
  const [{ user },dispatch]=useSatetValue();

  useEffect(() =>{
   const unsubcribe = db.collection('rooms').onSnapshot((snapshot)=> 
  setRooms(
    snapshot.docs.map((doc) =>({
     id:doc.id,
     data:doc.data(),
    }))
    )
    );

    return()=>{
    unsubcribe();
    }
  },[])

  return (
    <div className="sidebar">
      <div className='sidebar__header'>
        <Avatar src={user?.photoURL }/>
       <div className='sidebar__searchRight'>
        <IconButton>
         <DonutLargeIcon/>
         </IconButton>
         <IconButton>
         <ChatIcon/>
         </IconButton>
         <IconButton>
         <MoreVertIcon/>
         </IconButton>
       </div>
     </div>

     <div className='sidebar__search'>
      <div className='sidebar__searchContainer'>
      <IconButton>
      <SearchOutlinedIcon/>
      </IconButton>
      <input placeholder='Search or start new chat' type="text"/>
      </div>
     </div>
    
     <div className='sidebar__chats'>
      <SidebarChat addNewChat/>
      {rooms.map(room =>(
        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
      ))}
      
     </div>
   </div>

  ) 
}

export default Sidebar;