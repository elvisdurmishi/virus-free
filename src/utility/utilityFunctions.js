import axios from "axios";
import {config} from "../config";

const API_URL = config.api_url;

export function humanize(millisec) {
    millisec = (millisec / 1000);

    let seconds = (millisec / 1000).toFixed(0);

    let minutes = (millisec / (1000 * 60)).toFixed(0);

    let hours = (millisec / (1000 * 60 * 60)).toFixed(0);

    let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

    if (seconds < 60) {
        return seconds + " Sec ago";
    } else if (minutes < 60) {
        return minutes + " Min ago";
    } else if (hours < 24) {
        return hours + " Hrs ago";
    } else {
        return days + " Days ago"
    }
}

export function postRequest(path, body, onSuccess, onError) {
    axios.post(`${API_URL}${path}`, body)
        .then((res) => {
            onSuccess(res);
        })
        .catch((error) => {
            onError(error);
        });
}