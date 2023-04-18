import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipeSuggestion.css";
import { Link } from "react-router-dom";

export default function RecipeSuggestions() {
  const mockData = [<RecipeCard />, <RecipeCard />, <RecipeCard />];

  return (
    <section>
      <ul className="recipeSuggestions">
        {mockData.map((card) => (
          <li>
            <Link to="/recipepage">{card}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
