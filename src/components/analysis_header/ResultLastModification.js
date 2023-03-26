import {humanize} from "../../utility/utilityFunctions";

export const ResultLastModification = ({lastModification}) => {
    return <div>
        <h5>Last modification</h5>
        <p>{humanize(lastModification)}</p>
    </div>;
}