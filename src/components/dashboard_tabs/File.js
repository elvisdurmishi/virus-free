import Thumb from "../../assets/thumbprint.png";
import {config} from "../../config";
import axios from "axios";
import {useRef, useState} from "react";
import HorizontalProgressBar from "../common/HorizontalProgressBar";
import {useNavigate} from "react-router-dom";

function File({setAnalysis}) {
    const API_URL = config.api_url;
    const ref = useRef();
    const navigate = useNavigate();
    const [completed, setCompleted] = useState(0);
    const [analysing, setAnalysing] = useState(false);

    const handleImageUpload = (e) => {
        e.preventDefault();
        let files = e.target.files;
        const formData = new FormData();
        formData.append('file', files[0]);

        axios.post(`${API_URL}/upload`, formData)
            .then((res) => {
                setAnalysing(true);
                setCompleted(15);

                let result = analyseFileId(res.data.id);

                while (result === "queued") {
                    result = analyseFileId(res.data.id);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });

        ref.current.value = "";
    }

    const analyseFileId = (fileId) => {
        const data = {
            file_id: fileId
        }

        let returnValue = "";

        axios.post(`${API_URL}/file/analyse`, data)
            .then((res) => {
                if(res.data.status === "queued") {
                    setCompleted(completed < 94 ? completed + 5 : completed);
                    returnValue = res.data.status;
                    return res.data.status;
                }

                setAnalysis(res.data);
                navigate("/analysis/detection", res.data);
            })
            .catch((error) => {
                console.log("error", error);
            });

        return returnValue;
    }

    const renderInputButtons = () => {
        return (
            <>
                <img src={Thumb} width={"100"} alt={"thumb analyse"}/>

                <label className="file-label">
                    <input
                        ref={ref}
                        type="file"
                        className="file"
                        aria-label="File browser example"
                        onChange={handleImageUpload}
                    />
                    <span className="file-custom"></span>
                </label>
            </>
        )
    }

    const renderProgressBar = () => {
        return(
            <>
                <HorizontalProgressBar completed={completed}/>
            </>
        )
    }

    return (
        <div className={"row p-3"}>
            <div className={"col-lg-6 mx-auto d-flex flex-column justify-content-center align-items-center gap-3"}>
                {analysing ? renderProgressBar() : renderInputButtons()}
            </div>
        </div>
    )
}

export default File;