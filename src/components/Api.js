import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWQyZDBmMjRlODM3YzhmM2FkNmVhODA1YzEwODZiMSIsInN1YiI6IjY0NzIzMTU0OTQwOGVjMDEzZTgwNGNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t-Wi5Rh_G5BiCJbAxmKnly2CgRqIVYTt-VjXbEIOYMM",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  page: 1,
};

const API_KEY = "19d2d0f24e837c8f3ad6ea805c1086b1";

const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&page=1`,
    options
  );
  return data.results;
};

const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&page=1`,
    options
  );
  return data;
};

const getCastsDetails = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&page=1`,
    options
  );
  return data.cast;
};
const getReviewsDetails = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&page=1`,
    options
  );
  return data.results;
};

const getSearchMovie = async (query) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=1`,
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
