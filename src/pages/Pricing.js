import React from 'react';
import '../App.css';

function Pricing() {
  return (
    <div>
      <div className="status">
        <h1>Pricing</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <h2 className="card-title">Free plan</h2>
            <p>
              Sign up now to get free file scaning. Just upload your files and
              we will tell you all the information you need about their safety.
            </p>
            <hr></hr>
            <h3 className="card-footer">Sign up now!</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h2 className="card-title">Standard Plan</h2>
            <p>
              Sign up now to get free file scaning. Just upload your files and
              we will tell you all the information you need about their safety.
            </p>
            <hr></hr>
            <h3 className="card-footer">5$</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h2 className="card-title">Ultimate Plan</h2>
            <p>
              Sign up now to get free file scaning. Just upload your files and
              we will tell you all the information you need about their safety.
            </p>
            <hr></hr>
            <h3 className="card-footer">10$</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
