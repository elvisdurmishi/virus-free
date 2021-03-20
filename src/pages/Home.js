import React, { Component } from 'react';
import {
  FaSearch,
  FaRegCheckCircle,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import ProgressBar from './progress/ProgressBar';
import '../App.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      stats: null,
      engine: [],
      result: 'Analyze suspicious URLs to detect types of malware.',
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  handleButtonClick = () => {
    this.setState({
      loading: true,
      harmelss: null,
      malicious: null,
      engine: null,
      result: 'Loading results...',
    });
    var website = this.state.value;
    const url = 'https://cryptic-dusk-71131.herokuapp.com/url/' + website;
    fetch(url, {
      method: 'POST',
    })
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          harmless: json.data.attributes.last_analysis_stats.harmless,
          malicious: json.data.attributes.last_analysis_stats.malicious,
          engine: Object.keys(json.data.attributes.last_analysis_results),
          result: json.data.attributes.last_analysis_results,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          result: "The url provided is incorrect or the website can't be found",
        });
      });
  };

  render() {
    return (
      <div>
        <div className="status">
          <h1>Url Scan</h1>
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
            <h2>Url Scan</h2>
            <div className="input-container">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="input-box"
                type="text"
                placeholder="example.com"
                size="30"
                required
              />
              <button type="button" onClick={this.handleButtonClick}>
                <FaSearch color="#fff" fontSize="1rem" />
              </button>
            </div>
            <table>
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
                      (engine, bodykey, key, key1, key2, key3) => (
                        <tr key={bodykey}>
                          <td key={key2}>
                            {this.state.result[engine].engine_name}
                          </td>
                          <td key={key3}>
                            {this.state.result[engine].result === 'clean' ? (
                              <div className="result">
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
