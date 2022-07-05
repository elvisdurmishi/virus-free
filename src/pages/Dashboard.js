import LogoFull from "../assets/logo/virus-free-logo-full.png";
import {useEffect, useState} from "react";
import {useNavigate, useLocation, Outlet} from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const [type, setType] = useState("");

    useEffect(() => {
        if(location.pathname === "/") {
            navigate("/url");
        }
    }, [location])

    useEffect(() => {
        let type = location.pathname.replace("/", "");
        setType(type);
    }, [location]);

    const handleTypeChange = (type) => {
        setType(type);
        navigate(`/${type}`);
    }

    return (
        <div>
            <div className={"container"}>
                <div className={"header d-flex flex-column justify-content-center align-items-center"}>
                    <img className={"img-fluid d-none d-lg-block"} src={LogoFull} width={500} height={200} alt={"virus free"}/>
                    <p>Analyze suspicious files and domains to detect malware and other breaches.</p>
                </div>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <div className={"col-lg-10 mx-auto"}>
                            <ul className={"tab-switch"}>
                                <li className={`tab ${type === "url" ? 'active' : ''}`} onClick={() => {
                                    handleTypeChange("url");
                                }}>URL
                                </li>
                                <li className={`tab ${type === "file" ? 'active' : ''}`} onClick={() => {
                                    handleTypeChange("file");
                                }}>FILE
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-lg-12"}>
                        <div className={"col-lg-10 mx-auto"}>
                            <div className={"bg-tab-gray"}>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard