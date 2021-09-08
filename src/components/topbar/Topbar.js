import React from 'react';

import {NotificationsNone,Settings,Language} from '@material-ui/icons';
import './topbar.css';

const Topbar=()=> {
    return (
        <>
 <div className="topbar">
     <div className="topbarwrapper">
         <div className="topleft">
             <span className='logo'>Azim Mart</span>
         </div>
         <div className="topright"> 
  <div className="topbarIconContainer">
  <NotificationsNone/>
  <span className='topiconbadge'>2</span>
  </div>
  <div className="topbarIconContainer">
  <Language/>
  <span className='topiconbadge'>2</span>
  </div>
  <div className="topbarIconContainer">
  <Settings/>

  </div>
<img src="https://www.photodoozy.com/uploads/very-cute-and-stylish-wallpaper-for-girls-phone-fb-instagram-dp-photodoozy.jpg" alt="" className="topavatar" />
  
         </div>
     </div>
 </div>
            
        </>
    )
}

export default Topbar;