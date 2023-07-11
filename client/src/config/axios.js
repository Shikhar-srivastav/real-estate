import axios from "axios";

const api = axios.create({
  baseURL: "https://real-estate-api-nh3y.onrender.com"
})

export default api;