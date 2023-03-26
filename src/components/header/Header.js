import LogoSmall from "../../assets/logo/virus-free-logo-small.png";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAnalysisPage, setIsAnalysisPage] = useState(false);

    useEffect(() => {
        if (location.pathname.includes("/analysis")) {
            setIsAnalysisPage(true);
            return;
        }

        setIsAnalysisPage(false);
    }, [location, navigate])

    const navigateToHome = () => {
        navigate("/");
    }

    return (<div className={"container py-3"}>
        <header className={"d-flex align-items-center"}>
            <div className={"d-flex align-items-center cursor-pointer"} onClick={() => {
                navigate("/url");
            }}>
                <img src={LogoSmall} width={50} alt={"logo"}/>
                <div className={"d-flex flex-row"}>
                    <span>Virus Free</span>
                </div>
            </div>
            <div className={"ml-auto"}>
                {isAnalysisPage && <button className={"btn btn-outline-primary"} onClick={navigateToHome}>
                    New Scan
                </button>}
            </div>
        </header>
    </div>)
}