/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { getSearchMovie } from "../../components/Api";
import SearchBar from "components/SearchBar/SearchBar";
import { Link, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import noImage from "../../noImage.jpeg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./Movie.module.css";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getSearchMovie(searchQuery)
      .then(({ data }) => {
        if (data.results.length === 0) {
          toast.error(`There are no movies on your request "${searchQuery}"`);
          setMovies([]);
        }
        setMovies(data.results);
      })
      .catch((error) => {
        throw new Error("...ooopppsssss");
      });
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setSearchParams({ query: `${searchQuery}` });
  };

  return (
    <section className={css.section_movies}>
      <SearchBar onSearch={onSubmit} />
      <div className={css.container_movie}>
        {movies && (
          <>
            <ul className={css.list}>
              {movies.map(({ id, poster_path, title }) => (
                <li key={id} className={css.item}>
                  <Link
                    to={`/movies/${id}`}
                    state={{ from: location }}
                    className={css.link}
                  >
                    <img
                      className={css.img}
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                          : noImage
                      }
                      alt={title}
                    />
                    <p className={css.text}>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Movie;
