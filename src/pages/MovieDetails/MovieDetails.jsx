import { getMovieDetails } from 'components/Api';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import noImage from '../../noImage.jpeg';
import css from './MovieDaetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  const getYear = () => new Date(movie.release_date).getFullYear();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch(error => {
        throw new Error(
          'woops, something went wromg... Please, try agin later.'
        );
      });
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
            <Link
              to="cast"
              state={{ from: location?.state?.from }}
              className={css.itemAdditional}
            >
              Casts
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ from: location?.state?.from }}
              className={css.itemAdditional}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </section>
  );
};

export default MovieDetails;
