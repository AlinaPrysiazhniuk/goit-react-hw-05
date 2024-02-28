import { getTrendingMovies } from "../../components/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { MovieList } from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrending();
  }, []);

  return (
    <section className={css.section_home}>
      {movies && (
        <div className={css.container_home}>
          <h2 className={css.title}>Trending today</h2>

          <MovieList>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id} className={css.item}>
                <Link to={`movies/${id}`} className={css.link}>
                  <img
                    className={css.img}
                    src={
                      poster_path ? (
                        `https://image.tmdb.org/t/p/w200/${poster_path}`
                      ) : (
                        <div>noImage</div>
                      )
                    }
                    alt={title}
                  />
                  <p className={css.text}>{title}</p>
                </Link>
              </li>
            ))}
          </MovieList>
        </div>
      )}
    </section>
  );
};
export default HomePage;
