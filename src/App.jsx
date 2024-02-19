import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
export default App;
