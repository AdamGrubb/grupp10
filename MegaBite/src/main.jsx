// react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home } from "./components/Home";
import { NotFound } from "./components/notfound/NotFound";
import { RecipePage } from "./components/recipePage/RecipePage";
import { SiteContent } from "./components/siteContent/SiteContent";
import { SearchResults } from "./components/searchResults/SearchResults";

// css
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <SiteContent />,
      },
      {
        path: "searchresults",
        element: <SearchResults />,
      },
      {
        path: "searchresults/recipePage/:recipeId",
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
