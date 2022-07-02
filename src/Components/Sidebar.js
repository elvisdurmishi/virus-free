import React from 'react';
import {FaUserShield} from 'react-icons/fa';
import '../App.css';
import {SidebarData} from './SidebarData';

function Sidebar() {
    return (
        <div className="dashboard">
            <div className="user">
                <FaUserShield color="#6cdbeb" fontSize="6rem"/>
                <h3>Virus Free</h3>
                <p>Web Surfing</p>
            </div>
            <div className="links">
                {SidebarData.map((val, key) => {
                    return (
                        <div key={key} className="link ">
                            <div
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
        </div>
    );
}

export default Sidebar;
