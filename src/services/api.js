import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-clarke-energia-backend-6ovj.vercel.app",
});

export default api;