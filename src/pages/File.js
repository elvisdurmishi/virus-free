import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function File() {
  return (
    <div>
      <div className="status">
        <h1>File Scan</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <h2>File Scan</h2>
            <div className="input-container">
              <input className="input-box" type="text" />
              <a href="www.google.com">
                <FontAwesomeIcon
                  className="fas search-icon"
                  icon="search"
                ></FontAwesomeIcon>
                <i className="fas search-icon fa-search"></i>
              </a>
            </div>
            <p>
              Analyze suspicious files to detect types of malware automatically
              share them with the security community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default File;
