import axios from "axios";

const baseAxiosInterceptors = axios.create({
    baseURL: "/api"
});

export default baseAxiosInterceptors;