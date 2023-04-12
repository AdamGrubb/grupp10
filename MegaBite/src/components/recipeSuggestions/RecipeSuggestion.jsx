import RecipeCard from "../recipeCard/RecipeCard";
import { Link } from "react-router-dom";
import "./RecipeSuggestion.css";

export default function RecipeSuggestions() {
  const mockData = [<RecipeCard />, <RecipeCard />, <RecipeCard />];

  return (
    <section className="suggestionsSection flex justify-center">
      <div className="flex justify-center suggestionWrapper">
        <ul className="flex justify-between suggUL">
          {mockData.map((card) => (
            <li>{card}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
