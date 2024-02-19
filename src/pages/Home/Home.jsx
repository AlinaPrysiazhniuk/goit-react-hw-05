import { getTrendingMovies } from 'components/Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(error => {
        throw new Error(
          'woops, something went wromg... Please, try agin later.'
        );
      });
  }, []);

  return (
    <section className={css.section_home}>
      {movies && (
        <div className={css.container_home}>
          <h2 className={css.title}>Trending today</h2>

          <ul className={css.list}>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id} className={css.item}>
                <Link to={`movies/${id}`} className={css.link}>
                  <img
                    className={css.img}
                    src={
                      poster_path ? (
                        `https://image.tmdb.org/t/p/w200/${poster_path}`
                      ) : (
                        <div>noPhoto</div>
                      )
                    }
                    alt={title}
                  />
                  <p className={css.text}>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
export default Home;
