import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const api = axios.create({ baseURL, timeout: 10000 });
