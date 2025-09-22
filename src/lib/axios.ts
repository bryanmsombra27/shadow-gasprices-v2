import axios from "axios";

export const gasapi = axios.create({
  baseURL: "http://localhost:3000",
});

// interceptores
gasapi.interceptors.request.use((config) => {
  const authState = localStorage.getItem("auth") ?? "";
  const auth = authState ? JSON.parse(authState) : "";
  const token = auth ? auth.state.token : "";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
