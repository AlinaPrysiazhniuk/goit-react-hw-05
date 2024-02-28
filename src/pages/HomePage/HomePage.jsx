import { getTrendingMovies } from "../../components/Api";
import { useState, useEffect } from "react";
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

          <MovieList movies={movies} />
        </div>
      )}
    </section>
  );
};
export default HomePage;
