import axios from "axios";
const moviesRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const userRequest = axios.create({
  baseURL: "https://movie-0b55.onrender.com/api",
});

export default moviesRequest;
