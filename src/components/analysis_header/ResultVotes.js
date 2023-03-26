export const ResultVotes = ({votes}) => {
    return <div>
        <h5>Total Votes</h5>
        <div className={"d-flex flex-column"}>
            <div>
                <span>Harmless: </span>
                <span
                    className={"break-word"}>{votes?.harmless} </span>
                <i className={"fa fa-thumbs-up text-success"}></i>
            </div>
            <div>
                <span>Malicious: </span>
                <span
                    className={"break-word"}>{votes?.malicious} </span>
                <i className={"fa fa-thumbs-down text-danger"}></i>
            </div>
        </div>
    </div>;
}