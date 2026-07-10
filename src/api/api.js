import axios from "axios";

const API_KEY = "00667542966365d5de5d3775f99ff42e";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getPopularMovies = () =>
  api.get(`/movie/popular?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  api.get(`/search/movie?api_key=${API_KEY}&query=${query}`);

export const getMovieDetails = (id) =>
  api.get(`/movie/${id}?api_key=${API_KEY}`);

export default api;