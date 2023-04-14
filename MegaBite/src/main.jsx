// react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./components/Home";
import { NotFound } from "./components/notfound/NotFound";
// import RecipePage from "./components/recipePage/RecipePage";    //Uncomment this when the page is added
import SiteContent from "./components/siteContent/SiteContent";
// import SearchResults from "./components/searchResults/SearchResults"; //Uncomment this when the page is added

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
        // element: <SearchResults />, //Uncomment this when the page is added
      },
      {
        path: "searchresults/recipePage/:recipeId",
        // element: <RecipePage />, //Uncomment this when the page is added
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
