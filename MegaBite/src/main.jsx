// react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./components/notfound/NotFound";
import RecipePageDesktop from "./components/recipePage/RecipePageDesktop";
import SiteContent from "./components/siteContent/SiteContent";
import SearchResults from "./components/searchResults/SearchResults";

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
      },
      {
        path: "searchresults",
        element: <SearchResults />,
      },
      {
        path: "/searchresults/recipepage",
        element: <RecipePageDesktop />,
      },
      {
        path: "/recipepage", ///:recipeId
        element: (
          <RecipePageDesktop
            state={{
              title: "Oatmeal porridge",
              ingredients: [
                { name: "havregryn", amount: 2 },
                { name: "salt", amount: 4 },
                { name: "havregryn", amount: 2 },
              ],
              description: [
                "Koka upp vatten och havregryn och rör om under tiden.",
                "Koka upp vatten och havregryn och rör om under tiden.",
                "Koka upp vatten och havregryn och rör om under tiden.",
                "Koka upp vatten och havregryn och rör om under tiden.",
              ],
              time: 12,
              portions: 4,
              allergens: ["egg", "vegan"],
            }}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
