import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "19d2d0f24e837c8f3ad6ea805c1086b1";

const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};

function getMovieDetails(movieId) {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

function getCastsDetails(movieId) {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

function getReviewsDetails(movieId) {
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}

function getSearchMovie(query) {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
}

export {
  getCastsDetails,
  getMovieDetails,
  getReviewsDetails,
  getSearchMovie,
  getTrendingMovies,
};
