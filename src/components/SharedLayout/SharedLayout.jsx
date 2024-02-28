import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
