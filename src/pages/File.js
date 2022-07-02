import React, {Component} from 'react';
import {FaRegCheckCircle, FaRegQuestionCircle} from 'react-icons/fa';
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
            file_analysis_id: "",
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
            result: 'Analysing file...',
        });
        const files = event.target.files;
        const formData = new FormData();
        formData.append('file', files[0]);
        axios
            .post('https://virus-free-backend.herokuapp.com/upload', formData)
            .then((response) => {
                const {data} = response;
                this.setState({
                    file_analysis_id: data.data.id,
                    result: "File analysis complete."
                });


            })
            .catch((error) => {
                this.setState({
                    result: 'Please reload the page and try again!',
                });
            });
    };

    handleGetFileResult() {
        axios
            .post("https://virus-free-backend.herokuapp.com/file/analyse", {
                file_id: this.state.file_analysis_id
            })
            .then((result) => {
                const {data} = result;
                console.log("data data", data.data);
                if(data.data.attributes.status === "queued") {
                    setTimeout(() => {
                        this.handleGetFileResult()
                    }, 3000);

                    this.setState({
                        result: 'Results are in queue...',
                    });
                    return;
                }
                this.setState({
                  source: data.data.resource,
                  harmless: data.data.attributes.stats.undetected,
                  malicious: data.data.attributes.stats.malicious,
                  engine: Object.keys(data.data.attributes.results),
                  result: data.data.attributes.results,
                  loading: false,
                });
            }).catch((error) => {
            console.log("Error", error);
            this.setState({
                result: 'There was a problem getting the file results!',
            });
        });
    }

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
                            {this.state.file_analysis_id
                                ? (
                                    <button className={"custom-btn"} onClick={() => this.handleGetFileResult()}>Get Results</button>
                                )
                                : (
                                    <label className="file-label">
                                        <input
                                            type="file"
                                            className="file"
                                            aria-label="File browser example"
                                            onChange={this.handleImageUpload}
                                        />
                                        <span className="file-custom"></span>
                                    </label>
                                )}
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
