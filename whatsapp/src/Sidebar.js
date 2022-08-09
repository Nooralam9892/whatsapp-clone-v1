import React from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from "@mui/material"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebar__header'>
      
        <Avatar scr='https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/290986572_167482862442797_256226004884763669_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=2IQcJVyHFf8AX9MSf1K&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_sUpzbxizR6geos3jVia0cZozloCjsTkdIIT_8WDwspA&oe=62F95F32&_nc_sid=8fd12b'/>
        
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
      <SearchOutlinedIcon/>
      <input placeholder='Search or start new chat' type="text"/>
      </div>
     </div>
    
     <div className='sidebar__chats'>
      <SidebarChat addNewChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      
     </div>
   </div>

  )
}

export default Sidebar