import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Settings,
  Person,
  Message,
  Report,
  Assessment,
  AttachMoney,
  AllInbox,
  DynamicFeed,
  WorkOutline,
  Mail,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarwrapper">
          <div className="sidebarmenu">
            <h3 className="sidebarTitle dashboard">Dashboard</h3>
            <ul className="sidebarlist">
              <li className="sidebarlistitem active">
                <Link to="/"  className='Link'>
                
                  <LineStyle className="sidebarIcon" /> Home
                </Link>
              </li>
              <li className="sidebarlistitem">
                <Timeline className="sidebarIcon" /> Analytics
              </li>
              <li className="sidebarlistitem">
                <TrendingUp className="sidebarIcon" /> Sale
              </li>
              <li className="sidebarlistitem">
                <Settings className="sidebarIcon" /> Setting
              </li>
            </ul>
          </div>
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarlist">
              <li className="sidebarlistitem ">
                <Link
                  to="/userlist"
               
                  className='Link'>
               
                  <Person className="sidebarIcon" /> Users
                </Link>
              </li>
              <Link to="/products" className='Link'>
             
                <li className="sidebarlistitem">
                  <AllInbox className="sidebarIcon" /> Products
                </li>
              </Link>

              <li className="sidebarlistitem">
                <AttachMoney className="sidebarIcon" /> Transactions
              </li>
              <li className="sidebarlistitem">
                <Assessment className="sidebarIcon" /> Report
              </li>
            </ul>
          </div>
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarlist">
              <li className="sidebarlistitem ">
                <Mail className="sidebarIcon" /> Mail
              </li>
              <li className="sidebarlistitem">
                <DynamicFeed className="sidebarIcon" /> Feedback
              </li>
              <li className="sidebarlistitem">
                <Message className="sidebarIcon" /> Message
              </li>
            </ul>
          </div>
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarlist">
              <li className="sidebarlistitem ">
                <WorkOutline className="sidebarIcon" /> Manage
              </li>
              <li className="sidebarlistitem">
                <Timeline className="sidebarIcon" /> Analytics
              </li>
              <li className="sidebarlistitem">
                <Report className="sidebarIcon" /> Report
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
