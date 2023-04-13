import Search from "../search/Search";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import "../../index.css";

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
