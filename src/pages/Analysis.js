import ProgressBar from "../components/common/ProgressBar";
import {useEffect, useMemo, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {ResultCategories} from "../components/analysis_header/ResultCategories";
import {ResultId} from "../components/analysis_header/ResultId";
import {ResultVotes} from "../components/analysis_header/ResultVotes";
import {ResultLastModification} from "../components/analysis_header/ResultLastModification";
import {ResultOverviewText} from "../components/analysis_header/ResultOverviewText";

function Analysis({analysis, statResultList, lastModificationDate}) {
    const location = useLocation();
    const navigate = useNavigate();
    const [type, setType] = useState("detection");

    useEffect(() => {
        if (analysis === null) {
            navigate("/");
        }

        if (location.pathname === "/analysis") {
            navigate("/analysis/detection");
        }
    }, [location, navigate, analysis])

    useEffect(() => {
        let type = location.pathname.replace("/analysis/", "");
        setType(type === "" ? "detection" : type);
    }, [location]);

    const maliciousCounter = useMemo(() => {
        if (!analysis) return;

        return Object.entries(statResultList)?.flatMap(([key, value]) => {
            if (key === "malicious" || key === "suspicious") {
                return value;
            }

            return 0;
        }).reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }, [analysis, statResultList])

    const handleTypeChange = (type) => {
        setType(type);
        navigate(`/analysis/${type}`);
    }

    const getTotalScans = () => {
        return Object.values(statResultList)?.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }

    if (!analysis) {
        navigate("/url");
        return null;
    }

    return (<div>
        <div className={"container"}>
            <div className={"row mb-5 align-items-center"}>
                <div className={"col-lg-2 d-flex d-lg-blog justify-content-center mb-2"}>
                    <ProgressBar size={100} malicious={maliciousCounter ?? 0} scans={getTotalScans()} strokeWidth={10}
                                 circleTwoStroke={"red"}/>
                </div>
                <div className={"col-lg-10"}>
                    <div className={"container p-3"}>
                        <div className={"row py-3"}>
                            <div className={"col-lg-12"}>
                                {maliciousCounter !== undefined && <ResultOverviewText maliciousDetections={maliciousCounter} />}
                            </div>
                        </div>
                        <div className={"d-flex gap-3 justify-content-between"}>
                            {analysis?.id && <ResultId resultId={analysis?.id} />}
                            {analysis?.attributes?.total_votes && <ResultVotes votes={analysis?.attributes?.total_votes} />}
                            {lastModificationDate && <ResultLastModification lastModification={lastModificationDate} />}
                        </div>
                        {analysis.attributes.categories && <ResultCategories attributes={analysis.attributes}/>}
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-lg-12"}>
                    <ul className={"tab-switch"}>
                        <li className={`tab ${type === "detection" ? 'active' : ''} w-auto`} onClick={() => {
                            handleTypeChange("detection");
                        }}>Detection
                        </li>
                        <li className={`tab ${type === "stats" ? 'active' : ''} w-auto`} onClick={() => {
                            handleTypeChange("stats");
                        }}>Stats
                        </li>
                    </ul>
                </div>
                <div className={"col-lg-12"}>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Analysis;