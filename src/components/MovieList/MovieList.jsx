/* eslint-disable no-unused-vars */
// import css from "./MovieList.module.css";
import noImage from "../../noImage.png";
import { Link } from "react-router-dom";
import css from "../../pages/MoviesPage/MoviesPage.module.css";

export const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={css.item_movie}>
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
  );
};
