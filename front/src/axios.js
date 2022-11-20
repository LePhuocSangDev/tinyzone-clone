import axios from "axios";
const moviesRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const userRequest = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default moviesRequest;
