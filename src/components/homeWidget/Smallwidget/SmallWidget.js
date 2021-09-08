import { Visibility } from '@material-ui/icons';
import React from 'react';
import './SmallWidget.css';

const SmallWidget=()=> {
    return (
        <>
       <div className="smallWidget">
    
    <span className='smallWidgetTitle'>New Join Member</span>
    <ul className="smallWidgetList">
        <li className="smallWidgetListItem">
            <img className='smallWidgetImg' src="https://res.cloudinary.com/jerrick/image/upload/v1610445641/5ffd734863fa3c0021f356c7.png" alt=" User Profile pic" />
      <div className="smallWidgetUser">
          <span className="smallWidgetUserName">Emma</span>
          <span className="smallWidgetUserTitle">Software Engineer</span>
      </div>
      <button className='smallWidgetButton'><Visibility className='smallWidgetIcon'/> Display</button>
        </li>
        <li className="smallWidgetListItem">
            <img className='smallWidgetImg' src="https://static.remove.bg/remove-bg-web/a4391f37bcf9559ea5f1741ac3cee53c31ab75cc/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt=" User Profile pic" />
      <div className="smallWidgetUser">
          <span className="smallWidgetUserName">James
</span>
          <span className="smallWidgetUserTitle">Software Engineer</span>
      </div>
      <button className='smallWidgetButton'><Visibility className='smallWidgetIcon'/> Display</button>
        </li>
        <li className="smallWidgetListItem">
            <img className='smallWidgetImg' src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=" User Profile pic" />
      <div className="smallWidgetUser">
          <span className="smallWidgetUserName">Oliver.</span>
          <span className="smallWidgetUserTitle">Software Engineer</span>
      </div>
      <button className='smallWidgetButton'><Visibility className='smallWidgetIcon'/> Display</button>
        </li>
        <li className="smallWidgetListItem">
            <img className='smallWidgetImg' src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=" User Profile pic" />
      <div className="smallWidgetUser">
          <span className="smallWidgetUserName">Lucas.</span>
          <span className="smallWidgetUserTitle">Software Engineer</span>
      </div>
      <button className='smallWidgetButton'><Visibility className='smallWidgetIcon'/> Display</button>
        </li>
    </ul>
       </div>
            
        </>
    )
}

export default SmallWidget;
    
