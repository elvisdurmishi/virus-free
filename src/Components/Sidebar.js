import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import '../App.css';
import { SidebarData } from './SidebarData';
import { SidebarFooter } from './SidebarFooter';

function Sidebar() {
  return (
    <div className="dashboard">
      <div className="user">
        <FaUserShield color="#6cdbeb" fontSize="6rem" />
        <h3>Virus Free</h3>
        <p>Web Surfing</p>
      </div>
      <div className="links">
        {SidebarData.map((val, key) => {
          return (
            <div className="link ">
              <div
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
                className="link-page"
              >
                <div>{val.icon}</div>
                <h2> {val.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        {SidebarFooter.map((val, key) => {
          return (
            <div>
              <div
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
                className="pro"
              >
                <h2 classNam="small-title"> {val.description}</h2>
                <div>{val.icon}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
