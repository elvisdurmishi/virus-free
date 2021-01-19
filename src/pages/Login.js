import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import '../App.css';

function Login() {
  return (
    <div>
      <div className="status">
        <h1>Login</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info-login">
            <FaUserAlt color="#fff" fontSize="5rem" />
            <input
              id="username"
              className="input-box"
              type="text"
              placeholder="Username"
            />
            <input
              id="password"
              className="input-box"
              type="text"
              placeholder="Password"
            />
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
