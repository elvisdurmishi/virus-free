import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function Home() {
  const [input, setInput] = useState('');
  var base64Input = btoa(input);

  const url = 'https://www.virustotal.com/api/v3/urls/' + base64Input;

  const res = axios.get(url, {
    headers: {
      'x-apikey': process.env.REACT_APP_VIRUS_TOTAL_KEY,
    },
  });

  console.log(res);

  return (
    <div>
      <div className="status">
        <h1>Url Scan</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <h2>Url Scan</h2>
            <div className="input-container">
              <input
                value={input}
                onInput={(e) => setInput(e.target.value)}
                className="input-box"
                type="text"
              />
              <a href="www.google.com">
                <FontAwesomeIcon
                  className="fas search-icon"
                  icon="search"
                ></FontAwesomeIcon>
                <i className="fas search-icon fa-search"></i>
              </a>
              <h2>{base64Input}</h2>
            </div>
            <p>
              Analyze suspicious URLs to detect types of malware automatically
              share them with the security community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
