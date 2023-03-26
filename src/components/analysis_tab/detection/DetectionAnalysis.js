import {VendorAnalysisCard} from "./VendorAnalysisCard";

function DetectionAnalysis({engineResultList}) {

    return (<>
        <div className={"results-container"}>
            <div className={"row justify-content-center gap-2"}>
                {engineResultList && Object.entries(engineResultList)?.map(([key, value], index) => (
                    <VendorAnalysisCard vendor={value} key={"engine-" + index}/>
                ))}
            </div>
        </div>
    </>)
}

export default DetectionAnalysis