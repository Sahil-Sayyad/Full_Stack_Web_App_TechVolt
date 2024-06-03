import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import ProductGridPage from "pages/ProductGrid";
import ProductDetailsPage from "pages/ProductDetails";

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
    {
      path: "productdetails",
      element: <ProductDetailsPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
