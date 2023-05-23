// react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./components/notfound/NotFound";
import RecipePage from "./components/recipePage/RecipePage";
import SiteContent from "./components/siteContent/SiteContent";
import SearchResults from "./components/searchResults/searchResults";

// css
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <SiteContent />,
        children: [
          {
            path: "searchresults",
            element: <SearchResults />,
          },
        ],
      },
      {
        path: "/searchresults/recipepage",
        element: <RecipePage />,
      },
      {
        path: "/recipepage",
        element: <RecipePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
