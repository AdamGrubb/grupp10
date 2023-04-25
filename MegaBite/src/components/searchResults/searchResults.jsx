import RecipeCard from "../recipeCard/RecipeCard";
import arrow from "../../assets/arrow.png";
import "./SearchResults.css";
import { Link } from "react-router-dom";

export default function SearchResults() {
  return (
    <section className="">
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
    </section>
  );
}
