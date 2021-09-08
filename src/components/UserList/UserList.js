import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {UserDataRow} from '.././UserData';
import './UserList.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const UserList=() =>{
    const [Data,setData]=useState(UserDataRow);
    const onDeleteBtn=(id)=>{
        setData(Data.filter(item=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'UserName',
          headerName: 'UserName',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className='UserNameEdit'>
                      <img className='userAvatar' src={params.row.avatar} alt="" />
                      {params.row.UserName}
                  </div>
              )
          }
         
        },
        {field:'Email', headerName:'Email',width:150},
        {field:'Status',headerName:'Status',width:150},
        

        
        {
            field: 'Action',
            headerName: 'Action',
            width: 200,
            renderCell:(params)=>{
                return(
                 <>
                 <Link to={'/user'} className='Link'>
                 <button className='UserListEdit'>Edit</button>
                 </Link>
                     
                   <DeleteOutline className='userListEditIcon' onClick={()=>onDeleteBtn(params.row.id)}/>
                 </>
                )
            }
        }  
      ];
      
      
    return (
        <>
        <div className='userList'>
        <DataGrid
        rows={Data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      
      />
     

        </div>
            
        </>
    )
}

export default UserList;
