import axios from "axios";

// export const baseURL = "http://localhost:8000/api";
export const baseURL = "https://home-service-backend-h9ti.vercel.app/api";

export const dbObject = axios.create({
  withCredentials: true,
  baseURL,
});
