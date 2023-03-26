export const ResultOverviewText = ({maliciousDetections}) => {
    if (maliciousDetections === 0) {
        return (<p className={"text-success"}>
            <i className="fa fa-check"/> {" "}
            No security vendors and no sandboxes flagged this as malicious
        </p>)
    }

    if (maliciousDetections > 0 && maliciousDetections < 20) {
        return (<p className={"text-warning"}>
            <i className="fa fa-exclamation"/> {" "}
            Some security vendors flagged this as malicious
        </p>)
    }

    return (<p className={"text-danger"}>
        <i className="fa fa-exclamation-triangle"/> {" "}
        Most of the security vendors flagged this as malicious
    </p>)
}