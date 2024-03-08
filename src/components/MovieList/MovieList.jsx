import noImage from "../../noImage.png";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <ul className={css.list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={css.item_movie}>
          <Link to={`/movies/${id}`} state={location} className={css.link}>
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

export default MovieList;
