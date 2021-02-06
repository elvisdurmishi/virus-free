import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

export default class File extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      stats: null,
      engine: [],
      result: 'Not yet gotten',
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
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
                  <FaSearch color="#fff" fontSize="1rem" />
                  <i className="fas search-icon fa-search"></i>
                </a>
              </div>
              <p>
                Analyze suspicious files to detect types of malware
                automatically share them with the security community
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
