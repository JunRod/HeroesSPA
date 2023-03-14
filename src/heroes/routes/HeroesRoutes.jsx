import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const childrenHeroesRoutes = [
  {
    path: "marvel",
    element: <MarvelPage replace />,
  },
  {
    path: "dc",
    element: <DcPage replace />,
  },
  {
    path: "search",
    element: <SearchPage replace />,
  },
  {
    path: "hero/:id",
    element: <HeroPage replace />,
  },
  {
    path: "*",
    element: <Navigate to="marvel" replace />,
  },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2 mb-5">
        <Outlet />
      </div>
    </>
  );
};
