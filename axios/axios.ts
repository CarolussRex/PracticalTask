import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://my.laphil.com/en/rest-proxy/TXN/"
});

export default axiosInstance