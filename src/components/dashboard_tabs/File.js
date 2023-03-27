import Thumb from "../../assets/thumbprint.png";
import {useRef, useState} from "react";
import HorizontalProgressBar from "../common/HorizontalProgressBar";
import {useNavigate} from "react-router-dom";
import Loader from "../common/Loader";
import {postRequest} from "../../utility/utilityFunctions";

function File({setAnalysis}) {
    const ref = useRef();
    const navigate = useNavigate();
    const [completed, setCompleted] = useState(0);
    const [analysing, setAnalysing] = useState(false);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (e) => {
        e.preventDefault();
        let files = e.target.files;

        if (!files) {
            setError('Please provide a valid file!');
        }

        const formData = new FormData();
        formData.append('file', files[0]);
        setError('');
        setAnalysing(true);
        setLoading(true);
        setStatus('Uploading');
        setCompleted(0);

        postRequest('/upload', formData, ((res) => {
            setCompleted(15);
            setStatus('Analysing');

            analyseFileId(res.data.id);
        }), ((error) => {
            handleErrorResponse(error);
        }))

        ref.current.value = "";
    }

    const analyseFileId = (fileId, attempts = 0) => {
        const data = {
            file_id: fileId
        }

        setCompleted((prevState) => prevState < 94 ? prevState + 10 : prevState);
        attempts = attempts + 1;

        postRequest('/file/analyse', data, ((res) => {
            handleFileAnalyseSuccess(res, fileId, attempts);
        }), (() => {
            handleErrorResponse();
        }))
    }

    const handleFileAnalyseSuccess = (res, fileId, attempts) => {
        if (res?.data?.attributes?.status === "queued" && attempts <= 10) {
            setTimeout(() => {
                analyseFileId(fileId, attempts);
            }, 3000)

            return;
        }

        if (attempts > 10 && res?.data?.attributes?.status === "queued") {
            setAnalysing(false);
            setLoading(false);
            setError("The server took too long to respond! Please try again later.");

            return;
        }

        setAnalysing(false);
        setLoading(false);
        setAnalysis(res.data);
        navigate("/analysis/detection", res.data);
    }

    const handleErrorResponse = (error) => {
        setAnalysing(false);
        setLoading(false);
        setStatus('');
        setError(error?.response?.data?.error ?? "There was a problem with the server! Please try again later.");
    }

    const renderInputButtons = () => {
        return (<>
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
        </>)
    }

    const renderProgressBar = () => {
        return (<>
            <HorizontalProgressBar completed={completed} status={status}/>
        </>)
    }

    return (<div className={"row p-3 position-relative justify-content-center"}>
        {loading && <Loader/>}
        <div className={"col-lg-6 mx-auto d-flex flex-column justify-content-center align-items-center gap-3"}>
            {analysing ? renderProgressBar() : renderInputButtons()}
            {!analysing && error !== "" && (<span className={"text-danger"}>{error}</span>)}
            {!analysing && <span className={"text-gray"}>* The file size should not be larger than 15MB</span>}
        </div>
    </div>)
}

export default File;