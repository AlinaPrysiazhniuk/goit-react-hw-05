import { getMovieDetails } from "../../components/Api";
import { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import noImage from "../../noImage.png";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location?.state?.from ?? "/";

  const getYear = () => new Date(movie.release_date).getFullYear();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetails();
  }, [movieId]);

  const { title, overview, vote_average, genres, poster_path } = movie;

  return (
    <section className={css.movie}>
      <Link to={backLink} className={css.goBack}>
        Go back
      </Link>
      <div className={css.container_movie}>
        <img
          className={css.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : noImage
          }
          alt={title}
        />

        <div className={css.movieDescription}>
          <h1 className={css.movieTitle}>
            {title}
            <span>({getYear()})</span>
          </h1>
          <p className={css.movieText}>
            User Score: {Math.round(vote_average * 10)}%
          </p>
          <h2 className={css.movieOverview}>Overview</h2>
          <p className={css.movieText}>{overview}</p>
          {genres && (
            <>
              <h3 className={css.movieGenres}>Genres</h3>
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className={css.container_additional}>
        <h3 className={css.movieAdditional}>Additional information</h3>
        <ul className={css.listAdditional}>
          <li>
            <NavLink
              to="cast"
              state={{ from: location?.state?.from }}
              className={({ isActive }) =>
                isActive ? css.active : css.itemAdditional
              }
            >
              Casts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              state={{ from: location?.state?.from }}
              className={({ isActive }) =>
                isActive ? css.active : css.itemAdditional
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
