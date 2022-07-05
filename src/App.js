import './index.scss';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Url from "./components/dashboard_tabs/Url";
import File from "./components/dashboard_tabs/File";
import Analysis from "./pages/Analysis";
import DetectionAnalysis from "./components/analysis_tab/DetectionAnalysis";
import {useState} from "react";
import Layout from "./pages/Layout";

function App() {
    const [analysisData, setAnalysisData] = useState(null);

    return (
        <div className="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Dashboard/>}>
                        <Route path={"url"} element={<Url setAnalysis={setAnalysisData}/>}/>
                        <Route path={"file"} element={<File setAnalysis={setAnalysisData}/>}/>
                    </Route>
                    <Route path={"analysis"} element={<Analysis analysis={analysisData}/>}>
                        <Route path={"detection"} element={<DetectionAnalysis analysis={analysisData}/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
