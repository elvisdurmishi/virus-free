import LogoSmall from "../assets/logo/virus-free-logo-small.png";
import {useLocation, useNavigate} from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={"container py-3"}>
            <header className={"d-flex align-items-center"}>
                <img src={LogoSmall} width={50} alt={"logo"}/>
                <div className={"d-flex flex-row"}>
                    <span>Virus Free</span>
                </div>
                <ul className={"d-flex flex-row ml-auto nav-links"}>
                    <li className={`nav-link ${location.pathname.includes("url") ? 'active' : ''}`}
                        onClick={() => {
                            navigate("/url");
                        }}>Url
                    </li>
                    <li className={`nav-link ${location.pathname.includes("file") ? 'active' : ''}`}
                        onClick={() => {
                            navigate("/file");
                        }}>File
                    </li>
                </ul>
            </header>
        </div>
    )
}