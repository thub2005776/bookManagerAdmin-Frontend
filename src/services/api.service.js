import axios from "axios";
const commanConfig = {
    header: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseUrl) => {
    return axios.create({
        baseUrl,
        ...commanConfig,
    });
};