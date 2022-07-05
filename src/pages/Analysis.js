import ProgressBar from "../components/common/ProgressBar";
import {useEffect, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import LogoSmall from "../assets/logo/virus-free-logo-small.png";

function Analysis({analysis}) {
    const location = useLocation();
    const navigate = useNavigate();
    const [type, setType] = useState("detection");

    useEffect(() => {
        if(analysis === null) {
            navigate("/");
        }

        if(location.pathname === "/analysis") {
            navigate("/analysis/detection");
        }
    }, [location])

    useEffect(() => {
        let type = location.pathname.replace("/analysis/", "");
        setType(type === "" ? "detection" : type);
    }, [location]);

    const handleTypeChange = (type) => {
        setType(type);
    }

    return (
        <div>
            <div className={"container"}>
                <div className={"row mb-2"}>
                    <div className={"col-lg-2 d-flex d-lg-blog justify-content-center mb-2"}>
                        <ProgressBar size={100} malicious={0} scans={65} strokeWidth={10} circleTwoStroke={"red"} />
                    </div>
                    <div className={"col-lg-8 d-flex justify-content-start align-items-center"}>
                        <p className={"text-success"}>
                            <i className="fa fa-check"/> {" "}
                            No security vendors and no sandboxes flagged this file as malicious</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <ul className={"tab-switch"}>
                            <li className={`tab ${type === "detection" ? 'active' : ''} w-auto`} onClick={() => {
                                handleTypeChange("detection");
                            }}>Detection
                            </li>
                            <li className={`tab ${type === "details" ? 'active' : ''} w-auto`} onClick={() => {
                                handleTypeChange("details");
                            }}>Details
                            </li>
                        </ul>
                    </div>
                    <div className={"col-lg-12"}>
                        <div className={"bg-tab-gray"}>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis;