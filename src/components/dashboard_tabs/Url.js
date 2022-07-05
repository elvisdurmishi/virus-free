import Website from "../../assets/website-scan.png";
import {useState} from "react";
import axios from "axios";
import {config} from "../../config";
import {useNavigate} from "react-router-dom";

function Url({setAnalysis}) {
    const API_URL = config.api_url;
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const handleUrlSearch = (e) => {
        e.preventDefault();
        if(url === "") {
            setError("Please provide a valid url!");
            return;
        }

        setError("");

        const data = {
            url: url
        }

        axios.post(`${API_URL}/url`, data)
            .then((res) => {
                setAnalysis(res.data);
                navigate("/analysis/detection", res.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    return (
        <div className={"row p-3"}>
            <div className={"col-lg-6 mx-auto d-flex flex-column justify-content-center align-items-center gap-3 mb-5"}>
                <img src={Website} width={"100"} alt={"website analyse"}/>

                <form className={"w-100"} onSubmit={handleUrlSearch}>
                    <input className={"form-input"} type={"text"} placeholder={"Domain, url..."}
                           value={url}
                           pattern={"[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"}
                           onChange={(e) => setUrl(e.target.value)}
                    />
                    {error !== "" && (<span className={"text-danger"}>{error}</span>)}
                </form>
            </div>
        </div>
    )
}

export default Url;