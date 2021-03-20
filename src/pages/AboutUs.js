import React from 'react';
import '../App.css';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import pic from './assets/Elvis.jpg';

function AboutUs() {
  return (
    <div>
      <div className="status">
        <h1>About Us</h1>
      </div>
      <div className="cards">
        <div className="card profile">
          <div className="card-header">
            <img className="card-pic" src={pic} alt="profile-pic"></img>
            <div className="card-info">
              <h2 className="card-title">Elvis Durmishi</h2>
              <h4 className="card-subtitle">Web Developer</h4>
            </div>
          </div>
          <div className="card-body">
            <p>
              Hello. I am a Web Developer. I study at{' '}
              <a href={'https://feut.edu.al/'}>Faklteti Ekonomik.</a> I also
              love Video Editing and Photoshop.
            </p>
            <h2 className="result">My Socials</h2>
            <div className="socials">
              <a
                className="social-link"
                href={'https://github.com/elvisdurmishi'}
              >
                <FaGithub color="#426696" fontSize="3rem"></FaGithub>
                <h4>Github</h4>
              </a>
              <a
                className="social-link"
                href={'https://www.linkedin.com/in/elvis-durmishi-0846241b3/'}
              >
                <FaLinkedin color="#426696" fontSize="3rem"></FaLinkedin>
                <h4>LinkedIn</h4>
              </a>
              <a
                className="social-link"
                href={'mailto:elvisdurmishi@gmail.com'}
              >
                <FaMailBulk color="#426696" fontSize="3rem"></FaMailBulk>
                <h4>Email</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
