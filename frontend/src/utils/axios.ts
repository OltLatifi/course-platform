import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
    },
});


Axios.interceptors.response.use(
    function (response) {
        return response;
    },

    async (error) => {
        return error;
    }
);

export default Axios;