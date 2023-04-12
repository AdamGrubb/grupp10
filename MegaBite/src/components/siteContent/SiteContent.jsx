import Search from "../search/Search";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import "../../App.css";

export default function SiteContent() {
  return (
    <>
      <div className="content">
        <Search />
        <RecipeSuggestions />
      </div>
    </>
  );
}
