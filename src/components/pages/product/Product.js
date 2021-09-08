import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../chart/Chart';
import {productData} from '../../UserData';
import './product.css';

function Product() {
    return (
        <div className='product'>

           <div className="productTitleContainer">
               <h1 className='productTitle'>Product</h1>
           <Link to='/newproduct'>
               <button className="productAddBtn">Create</button>

           </Link>
           </div>
           <div className="productTop">
           <div className="productTopLeft">
           <Chart data={productData} datakey='Sale' title='Sales performance'></Chart>

           </div>
           <div className="productTopRight">
           <div className="productInfoTop">
               <img src="https://gloimg.gbtcdn.com/storage/item/6673611814016536576/15942/b086dc9b9f85.jpg_500x500.jpg" alt="" className="productInfoImg" />
               <span className="productInfoName">HeadPhones Bluethoot</span>
           </div>
           <div className="productBottom">
               <div className="productInfoItem">
                   <span className="productInfoKey">Id</span>
                   <span className="productInfoValue">1212</span>
               </div>
               <div className="productInfoItem">
                   <span className="productInfoKey">Sales</span>
                   <span className="productInfoValue">3412</span>
               </div>
               <div className="productInfoItem">
                   <span className="productInfoKey">Active</span>
                   <span className="productInfoValue">Yes</span>
               </div>
               <div className="productInfoItem">
                   <span className="productInfoKey">In Stock</span>
                   <span className="productInfoValue">No </span>
               </div>
           </div>


           </div>
           </div>
           <div className="productBottomForm">
              <form  className="productForm">
                  <div className="productFormLeft">
                      <label > Product Name</label>
                      <input type="text" placeholder='HeadPhone' />
                      <label >In Stock</label>
                      <select name="instock" id="instock">
                          <option value="yes">Yes</option>
                          <option value="no">No </option>
                      </select>
                      <label >Active</label>
                      <select name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No </option>
                      </select>
                  </div>
                  <div className="productFormRight">
                      <div className="productupload">
                          <img src="https://vmart.pk/wp-content/uploads/2020/12/JBL_TUNE700BT_ProductImage_Front_Black.jpg" alt="" className="productuploadImg" />
            <label for="file">
                <Publish/>
            </label>
            <input type="file" style={{display:'none'}} id='file' />
             </div>
             <button className='productUpdateBtn'>Update</button>
                  </div>
              </form>
           </div>
        </div>
    )
}

export default Product
