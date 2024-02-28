import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.container_header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : css.link_header)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? css.active : css.link_header)}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
