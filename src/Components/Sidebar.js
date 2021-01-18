import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Sidebar() {
  return (
    <div className="dashboard">
      <div className="user">
        <FontAwesomeIcon
          className="fas, icon-color, fa-5x"
          icon="user-shield"
        ></FontAwesomeIcon>
        <h3>Virus Free</h3>
        <p>Web Surfing</p>
      </div>
      <div className="links">
        <div className="link active">
          <a href="www.google.com" className="link-page">
            <FontAwesomeIcon
              className="fas, icon-color, fa-2x"
              icon="link"
            ></FontAwesomeIcon>
            <h2>Url</h2>
          </a>
        </div>
        <div className="link">
          <a href="www.google.com" className="link-page">
            <FontAwesomeIcon
              className="fas, icon-color, fa-2x"
              icon="file-upload"
            ></FontAwesomeIcon>
            <i className="fas icon-color fa-2x fa-file-upload"></i>
            <h2>File</h2>
          </a>
        </div>
        <div className="link">
          <a href="www.google.com" className="link-page">
            <FontAwesomeIcon
              className="fas, icon-color, fa-2x"
              icon="tag"
            ></FontAwesomeIcon>
            <i className="fas icon-color fa-2x fa-tag"></i>
            <h2>Pricing</h2>
          </a>
        </div>
        <div className="link">
          <a href="www.google.com" className="link-page">
            <FontAwesomeIcon
              className="fas, icon-color, fa-2x"
              icon="address-card"
            ></FontAwesomeIcon>
            <i className="fas icon-color fa-2x fa-address-card"></i>
            <h2 className="about-us-item">About us</h2>
          </a>
        </div>

        <div className="link">
          <a href="www.google.com" className="link-page">
            <FontAwesomeIcon
              className="fas, icon-color, fa-2x"
              icon="sign-in-alt"
            ></FontAwesomeIcon>
            <i className="fas icon-color fa-2x fa-sign-in-alt"></i>
            <h2>Sign In</h2>
          </a>
        </div>
      </div>
      <div className="pro">
        <h2 className="small-title">
          Sign up now for unlimited file verification.
        </h2>
        <a className="full-link" href="www.google.com">
          <FontAwesomeIcon
            className="fas, sign-up-icon, fa-5x"
            icon="user-plus"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
