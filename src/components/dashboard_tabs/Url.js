import Website from "../../assets/website-scan.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Loader from "../common/Loader";
import {postRequest} from "../../utility/utilityFunctions";

function Url({setAnalysis}) {
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleUrlSearch = (e) => {
        e.preventDefault();
        if (url === "") {
            setError("Please provide a valid url!");
            return;
        }

        setError("");
        setLoading(true);

        const data = {
            url: url
        }

        postRequest('/url', data, ((res) => {
            setLoading(false);
            setAnalysis(res.data);
            navigate("/analysis/detection", res.data);
        }), ((error) => {
            setLoading(false);
            setError(error?.response?.data?.error ?? "There was an error with the server!");
        }))
    }

    return (<div className={"row p-3"}>
        {loading && <Loader/>}
        <div className={"col-lg-6 mx-auto d-flex flex-column justify-content-center align-items-center gap-3 mb-5"}>
            <img src={Website} width={"100"} alt={"website analyse"}/>

            <form className={"w-100"} onSubmit={handleUrlSearch}>
                <div className={"domain-input mb-4"}>
                    <input className={"form-input"} type={"text"} placeholder={"Domain, url..."}
                           value={url}
                           onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type={"submit"}><i className="fa fa-search"/></button>
                </div>
                {error !== "" && (<span className={"text-danger"}>{error}</span>)}
            </form>
        </div>
    </div>)
}

export default Url;