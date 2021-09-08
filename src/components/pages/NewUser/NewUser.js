import React from 'react'
import './newUser.css';
function NewUser() {
    return (
        <div className='newUser'>
       <h1 className="newUserTitle">New User</h1>
       <form  className="newUserform">
           <div className="newUserItem">
               <label >User Name</label>
               <input type="text"  placeholder='Abcd ...'
               />
           </div>
           <div className="newUserItem">
               <label >Full Name</label>
               <input type="text"  placeholder='Sunail'
               />
           </div>
           <div className="newUserItem">
               <label >Email</label>
               <input type="email"  placeholder='Abcd@gmail.com'
               />
           </div>
           <div className="newUserItem">
               <label >Password</label>
               <input type="password"  placeholder='*******'
               />
           </div>
           <div className="newUserItem">
               <label >Address</label>
               <input type="text"  placeholder='I8/4 ,Islamabad '
               />
           </div>
           <div className="newUserItem">
               <label >Gender</label>
           <div className="newUserGender">
                   
           <input type="radio"  name='male' value='male' id='male'        />
                <label for='male'>Male</label>
                    
               <input type="radio"  name='female' value='female' id='female'        />
                <label for='female'>Female</label>
                    
               <input type="radio"  name='other' value='other' id='male'        />
                <label for='other'>Other</label>
           </div>
           </div>
           <div className="newUserItem">
               <label >Active</label>
               <select name="active" id="active" className="newUserSelect">
                   <option value="yes">Yes</option>
                   <option value="no ">No</option>
               </select>
           </div>
           <button className='newUserBtn'>Create</button>
       </form>
        </div>
    )
}

export default NewUser 
