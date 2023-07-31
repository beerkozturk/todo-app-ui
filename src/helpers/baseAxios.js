import axios from "axios";
//import baseAxios from "../helpers/baseAxios"; şu şekilde importla
const baseAxios = axios.create({
    baseURL: "https://localhost:7166"
});

export default baseAxios;