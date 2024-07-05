import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:3004",
    withCredentials: true,
    
})