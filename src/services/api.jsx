import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust if needed
});

export const loginUser = (userData) => API.post("/login", userData);
export const signupUser = (userData) => API.post("/register", userData);

