import axios from "axios";
import {urls} from "./requests";

const axiosRequest = axios.create({
    baseURL: urls.baseUrl
});

export default axiosRequest;