import React, { Component } from 'react';
import { FaRegCheckCircle, FaRegQuestionCircle } from 'react-icons/fa';
import '../App.css';
import axios from 'axios';
import ProgressBar from './progress/ProgressBar';

export default class File extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      stats: null,
      engine: [],
      result: 'Analyze suspicious Files to detect types of malware.',
      loading: true,
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  handleImageUpload = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
      harmelss: null,
      malicious: null,
      engine: null,
      result: 'Loading results...',
    });
    const files = event.target.files;
    const formData = new FormData();
    formData.append('myFile', files[0]);
    axios
      .post('https://cryptic-dusk-71131.herokuapp.com/upload', formData)
      .then((response) => {
        this.setState({
          source: response.data.resource,
          harmless: response.data.total,
          malicious: response.data.positives,
          engine: Object.keys(response.data.scans),
          result: response.data.scans,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          result: 'Please reload the page and try again!',
        });
      });
  };

  render() {
    return (
      <div>
        <div className="status">
          <h1>File Scan</h1>
          {this.state.loading || !this.state.result ? (
            <div className="empty-display"></div>
          ) : (
            [
              <ProgressBar
                key={12214124124}
                malicious={this.state.malicious}
                scans={this.state.harmless}
                size={100}
                strokeWidth={10}
                circleTwoStroke="red"
              />,
            ]
          )}
        </div>
        <div className="cards">
          <div className="card">
            <div className="input-container column">
              <h2>File Scan</h2>
              <label className="file-label">
                <input
                  type="file"
                  className="file"
                  aria-label="File browser example"
                  onChange={this.handleImageUpload}
                />
                <span className="file-custom"></span>
              </label>
            </div>
            <table>
              {this.state.loading ? (
                <thead></thead>
              ) : (
                <thead>
                  <tr>
                    <th>Engine</th>
                    <th>Result</th>
                    <th>Severity</th>
                  </tr>
                </thead>
              )}

              <tbody>
                {this.state.loading || !this.state.result ? (
                  <tr>
                    <td>
                      <p>{this.state.result}</p>
                    </td>
                  </tr>
                ) : (
                  [
                    this.state.engine.map(
                      (engine, key, bodykey, key2, key3, key5) => (
                        <tr key={key}>
                          <td key={key2}>{this.state.engine[key]}</td>
                          <td key={bodykey}>
                            {this.state.result[engine].result}
                          </td>
                          <td key={key3}>
                            {this.state.result[engine].detected === false ? (
                              <div key={key5} className="result">
                                <FaRegCheckCircle color="#00FF00"></FaRegCheckCircle>
                                <p>Clean</p>
                              </div>
                            ) : (
                              <div className="result">
                                <FaRegQuestionCircle color="red"></FaRegQuestionCircle>
                                <p>Suspicious</p>
                              </div>
                            )}
                          </td>
                          {this.state.loading}
                        </tr>
                      )
                    ),
                  ]
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
