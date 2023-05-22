import Search from "../search/Search";
// import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import { Outlet } from "react-router-dom";
import { LocationCuisine } from "../search/LocationCuisine";

import "./SiteContent.css";

export default function SiteContent() {
  return (
    <>
      <div className="content">
        <Search />
        <Outlet />
        {/* <RecipeSuggestions /> */}
      </div>
    </>
  );
}
