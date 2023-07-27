import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL
});

export default axiosInstance