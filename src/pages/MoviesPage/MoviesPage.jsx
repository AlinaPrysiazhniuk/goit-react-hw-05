import { useState, useEffect } from "react";
import { getSearchMovie } from "../../components/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";
import { MovieList } from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) {
      return setMovies([]);
    }

    const getMovieQuery = async () => {
      try {
        const data = await getSearchMovie(searchQuery);

        if (data.length === 0) {
          toast.error(`There are no movies on your request "${searchQuery}"`);
          setMovies([]);
        }
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieQuery();
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setSearchParams({ query: `${searchQuery}` });
  };

  return (
    <section className={css.section_movies}>
      <SearchBar onSearch={onSubmit} />

      <div className={css.container_movie}>
        {movies && <MovieList movies={movies} location={location} />}
        <Toaster duration={1000} position={"top-left"} />
      </div>
    </section>
  );
};

export default MoviesPage;
