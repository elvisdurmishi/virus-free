import React from 'react';
import '../App.css';

function AboutUs() {
  return (
    <div>
      <div className="status">
        <h1>About Us</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <h2 className="card-title">Edmond Allaraj</h2>
            <p>
              Hello I'm Edmond Allaraj. I am a student from Albania. Studying
              for Economics Informatics in "Fakulteti Ekonomik, Universiteti i
              Tiranes"
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h2 className="card-title">Elvis Durmishi</h2>
            <p>
              Hello I'm Elvis Durmishi. I am a student from Albania. Studying
              for Economics Informatics in "Fakulteti Ekonomik, Universiteti i
              Tiranes"
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h2 className="card-title">Henri Naqe</h2>
            <p>
              Hello I'm Henri Naqe. I am a student from Albania. Studying for
              Economics Informatics in "Fakulteti Ekonomik, Universiteti i
              Tiranes"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
