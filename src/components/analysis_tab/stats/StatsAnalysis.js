import {StatAnalysisCard} from "./StatAnalysisCard";

export const StatsAnalysis = ({statResultList}) => {
    return <>
        <div className={"results-container"}>
            <div className={"row justify-content-center gap-2"}>
                {Object.entries(statResultList)?.map(([key, value], index) => (
                    <StatAnalysisCard stat={key} value={value} key={"stat-" + index}/>
                ))}
            </div>
        </div>
    </>
}