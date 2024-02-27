import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWQyZDBmMjRlODM3YzhmM2FkNmVhODA1YzEwODZiMSIsInN1YiI6IjY0NzIzMTU0OTQwOGVjMDEzZTgwNGNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t-Wi5Rh_G5BiCJbAxmKnly2CgRqIVYTt-VjXbEIOYMM",
  },
};

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "19d2d0f24e837c8f3ad6ea805c1086b1";

const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    options
  );
  return data.results;
};

const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    options
  );
  return data;
};

const getCastsDetails = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    options
  );
  return data;
};
const getReviewsDetails = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
    options
  );
  return data.results;
};

const getSearchMovie = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    options
  );
  return data.results;
};

export {
  getCastsDetails,
  getMovieDetails,
  getReviewsDetails,
  getSearchMovie,
  getTrendingMovies,
};
