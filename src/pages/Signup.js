import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import '../App.css';

function Signup() {
  return (
    <div>
      <div className="status">
        <h1>Sign Up</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info-login">
            <FaUserPlus color="#fff" fontSize="5rem" />
            <input
              id="name"
              className="input-box"
              type="text"
              placeholder="Name"
            />
            <input
              id="email"
              className="input-box"
              type="text"
              placeholder="Email"
            />
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
            <input
              id="confirm-password"
              className="input-box"
              type="text"
              placeholder="Confirm Password"
            />
            <button className="btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
