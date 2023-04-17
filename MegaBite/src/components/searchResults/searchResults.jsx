import RecipeCard from "../recipeCard/RecipeCard";
import arrow from "../../assets/arrow.png";
import "./searchResults.css";

export default function SearchResults() {
  return (
    <section className="">
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
    </section>
  );
}
