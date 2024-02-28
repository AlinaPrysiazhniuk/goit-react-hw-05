import { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [movie, setMovie] = useState("");

  const handleChangeQuery = (e) => {
    setMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movie.trim() === "") {
      return toast.error("Enter data for search");
    }

    onSearch(movie);
    setMovie("");
  };

  return (
    <div className={css.container_form}>
      <p className={css.title}>Please, enter name of movie for search</p>
      <form onSubmit={handleSubmit} className={css.search_form}>
        <input
          type="text"
          name="movie"
          value={movie}
          onChange={handleChangeQuery}
          autoComplete="off"
          autoFocus
          className={css.input}
        />
        <button type="submit" className={css.search_button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
