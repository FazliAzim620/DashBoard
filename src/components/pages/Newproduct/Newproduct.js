import React from 'react'
import '../Newproduct/Newproduct.css'
function Newproduct() {
    return (
        <div className='newproduct'> 
        <div className='newProduct'>
       <h1 className="newProductTitle">New Product</h1>
       <form  className="newProductform">
           <div className="newProductItem">
               <label >Product Name</label>
               <input type="text"  placeholder='Camera'
               />
           </div>
           <div className="newProductItem">
               <label >ID</label>
               <input type="number"  placeholder='1'
               />
           </div>
           <div className="newProductItem">
               <label >Number Of Items</label>
               <input type="Number"  placeholder='120'
               />
           </div>
         
         
           <div className="newProductItem">
               <label >Active</label>
               <select name="active" id="active" className="newProductSelect">
                   <option value="yes">Yes</option>
                   <option value="no ">No</option>
               </select>
           </div>
           <button className='newProductBtn'>Create</button>
       </form>
        </div>
            
        </div>
    )
}

export default Newproduct
