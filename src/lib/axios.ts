import axios from "axios";

export const gasapi = axios.create({
  baseURL: "http://localhost:3000",
});
