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
              <Link
                to="/recipepage"
                state={{
                  title: "Oatmeal porridge",
                  ingredients: [
                    { name: "havregryn", amount: 2 },
                    { name: "salt", amount: 4 },
                    { name: "havregryn", amount: 2 },
                  ],
                  description: [
                    "Koka upp vatten och havregryn och rör om under tiden.",
                    "Koka upp vatten och havregryn och rör om under tiden.",
                    "Koka upp vatten och havregryn och rör om under tiden.",
                    "Koka upp vatten och havregryn och rör om under tiden.",
                  ],
                  time: 12,
                  portions: 4,
                  allergens: ["egg", "vegan"],
                }}
              >
                {card}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
