import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipeSuggestion.css";
import { Link } from "react-router-dom";

export default function RecipeSuggestions() {
  const mockData = [<RecipeCard />, <RecipeCard />, <RecipeCard />];

  return (
    <section className="suggestionsSection flex justify-center">
      <div className="flex justify-center suggestionWrapper">
        <ul className="flex justify-between suggUL">
          {mockData.map((card) => (
            <li>
              <Link to="/recipepage">{card}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
