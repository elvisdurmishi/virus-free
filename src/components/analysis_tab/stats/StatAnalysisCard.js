export const StatAnalysisCard = ({stat, value}) => {
    return (<div className={"col-lg-5"}>
        <div className={"stat-analysis-card"}>
            <div>
                <span className={"text-capitalize"}>{stat}: </span>
                <span>{value}</span>
            </div>
        </div>
    </div>)
}