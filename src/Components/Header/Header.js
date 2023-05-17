import React from 'react'
import "./header.css";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function Header() {
  return (
    <div>
      <header>
        <div className='header-content'>
          <div>
        <input type="text" placeholder='search' className='custom-input'/>
        </div>
        <div>
        <NotificationsNoneOutlinedIcon style={{verticalAlign:"middle"}} />
        &nbsp;
        <EmailOutlinedIcon style={{verticalAlign:"middle"}}/>
        &nbsp; 
        <button className='add'>Add Photo +</button>
        </div>
        </div>
      </header>
    </div>
  )
}
