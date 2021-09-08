import React from 'react';
import {ProductRow} from '../UserData';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './products.css';

function Product() {

    const [product,setproduct]=useState(ProductRow);
    const onDeleteBtn=(id)=>{
        setproduct(product.filter(item=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className='productName'>
                      <img className='prodcutimage' src={params.row.image} alt="" />
                      {params.row.Name}
                  </div>
              )
          }
         
        },
        {field:'Price', headerName:'Price',width:150},
        {field:'Status',headerName:'Status',width:150},
        

        
        {
            field: 'Action',
            headerName: 'Action',
            width: 200,
            renderCell:(params)=>{
                return(
                 <>
                 <Link to={'/product'} className='Link'>
                 <button className='ProductListEdit'>Edit</button>
                 </Link>
                     
                   <DeleteOutline className='productListEditIcon' onClick={()=>onDeleteBtn(params.row.id)}/>
                 </>
                )
            }
        }  
      ];
      
    return (
      
           <div className='productList'>
        
        <DataGrid
        rows={product}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick />
     

        </div>
            
      
    )
}

export default Product
