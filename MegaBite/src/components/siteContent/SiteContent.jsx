import Search from "../search/Search";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import "../../index.css";
import { Outlet } from "react-router-dom";

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
