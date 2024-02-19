import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <div className={css.container_header}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.link_header
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css.active : css.link_header
            }
          >
            Movies
          </NavLink>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
