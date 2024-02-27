import css from "./MovieList.module.css";

export const MovieList = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};
