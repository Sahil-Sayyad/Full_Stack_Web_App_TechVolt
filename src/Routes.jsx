import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import ProductGridPage from "pages/ProductGrid";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "productgrid",
      element: <ProductGridPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
