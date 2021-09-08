import {CalendarToday, LocationSearching,MailOutline, PermIdentity, PhoneAndroid,Publish,} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <>
      <div className="user">
        <div className="userTitleContienr">
        <h1 className="userTitle">Edit User</h1>
          <Link to='/newUser' className='Link'>
         
          <button className="userAdd">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
                className="userImg"
              />
              <div className="userShowTopTitle">
                <span className="userName">Sunail</span>
                <span className="usertitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">Sunail</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">12 03 2000</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+92 3434 49499494</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">sunail@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateform">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Abcdef"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>FullName</label>
                  <input
                    type="text"
                    placeholder="Abcdef"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>DoB</label>
                  <input
                    type="text"
                    placeholder="12 03 2000"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone No</label>
                  <input
                    type="text"
                    placeholder="0383 30834343"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="abd@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="I8/4 Islamabad"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdatePic"
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className='userUpdateIcon' />
                  </label>
                  <input
                    type="file"
                    name=""
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>
                <button className="userUpdateButton">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
