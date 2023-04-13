import Search from "../search/Search";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import SearchResults from "../searchResults/searchResults";

export default function SiteContent() {
  return (
    <>
      <Search />
      {/* <RecipeSuggestions /> */}
      <SearchResults />
    </>
  );
}
