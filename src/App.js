import './index.scss';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Url from "./components/dashboard_tabs/Url";
import File from "./components/dashboard_tabs/File";
import Analysis from "./pages/Analysis";
import DetectionAnalysis from "./components/analysis_tab/detection/DetectionAnalysis";
import {useState} from "react";
import Layout from "./pages/Layout";
import {StatsAnalysis} from "./components/analysis_tab/stats/StatsAnalysis";

function App() {
    const [analysisData, setAnalysisData] = useState(null);

    let statResultList;
    let engineResultList;
    let lastModificationDate;

    switch (analysisData?.type) {
        case 'analysis':
            engineResultList = analysisData?.attributes?.results;
            statResultList = analysisData?.attributes?.stats;
            lastModificationDate = analysisData?.attributes?.date;
            break;
        case 'domain':
            engineResultList = analysisData?.attributes?.last_analysis_results;
            statResultList = analysisData?.attributes?.last_analysis_stats;
            lastModificationDate = analysisData?.attributes?.last_modification_date;
            break;
        default:
            statResultList = {};
    }

    return (<div className="App">
        <Routes>
            <Route element={<Layout/>}>
                <Route path={"/"} element={<Dashboard/>}>
                    <Route path={"url"} element={<Url setAnalysis={setAnalysisData}/>}/>
                    <Route path={"file"} element={<File setAnalysis={setAnalysisData}/>}/>
                </Route>
                <Route path={"analysis"} element={<Analysis analysis={analysisData} statResultList={statResultList}
                                                            lastModificationDate={lastModificationDate}/>}>
                    <Route path={"detection"} element={<DetectionAnalysis engineResultList={engineResultList}/>}/>
                    <Route path={"stats"} element={<StatsAnalysis statResultList={statResultList}/>}/>
                </Route>
            </Route>
        </Routes>
    </div>);
}

export default App;
