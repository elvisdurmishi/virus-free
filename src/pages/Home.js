import React, {Component} from 'react';
import {
    FaSearch,
    FaRegCheckCircle,
    FaRegQuestionCircle,
} from 'react-icons/fa';
import ProgressBar from './progress/ProgressBar';
import '../App.css';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            stats: null,
            engine: [],
            result: 'Analyze suspicious URLs to detect types of malware.',
            loading: true,
            malicious: null,
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleOnSubmit(e) {
        e.preventDefault();
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
        const url = 'https://virus-free-backend.herokuapp.com/url';

        axios({
            method: 'post',
            url: url,
            data: {
                url: website,
            }
        }).then((response) => {
            const {data} = response;
            this.setState({
                harmless: data.data.attributes.last_analysis_stats.harmless,
                malicious: data.data.attributes.last_analysis_stats.malicious,
                engine: Object.keys(data.data.attributes.last_analysis_results),
                result: data.data.attributes.last_analysis_results,
                loading: false,
            });
        }).catch(() => {
            this.setState({
                result: "The url provided is incorrect or the website can't be found",
            });
        });
    };

    render() {
        return (
            <div>
                <div className="cards">
                    <div className="card">
                        <div className="main-input-section">
                            <h2>Url Scan</h2>
                            <form className="input-container" onSubmit={(e) => this.handleOnSubmit(e)}>
                                <input
                                    value={this.state.value}
                                    onChange={(e) => this.handleChange(e)}
                                    className="input-box"
                                    type="text"
                                    placeholder="example.com"
                                    size="30"
                                    required
                                />
                                <button type="submit" onClick={() => this.handleButtonClick()}>
                                    <FaSearch color="#fff" fontSize="1rem"/>
                                </button>
                            </form>
                            <div className={"progress-bar-in-header"}>
                                {this.state.malicious !== null && (
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
