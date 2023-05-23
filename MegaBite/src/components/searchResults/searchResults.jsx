import RecipeCard from "../recipeCard/RecipeCard";
import { Link } from "react-router-dom";
import "../recipeCard/RecipeCard.css";
import "../../index.css";
import useRecipeStore from "../../hooks/useRecipeStore";

import "./searchResults.css";

export default function SearchResults() {
  //This gets recipies stored in the filteredRecipeCollection from useRecipeStore.
  const recipeFromStore = useRecipeStore(
    (state) => state.filteredRecipeCollection
  );

  const displayRecipeCards = (recipes) => {
    //This array is storing the recipecard generated from the following for-loop.
    let RecipeCards = [];

    //This for-loop iterates over the array of recipes sent in as a parameter and creates recipecards and sends objekt-information to the recipe-page with the help of "State".
    for (let x = 0; x < recipes.length; x++) {
      RecipeCards.push(
        <Link
          className="recipe-container"
          key={recipes[x].id}
          to="/searchresults/recipepage"
          state={recipes[x]}
        >
          <RecipeCard
            id={recipes[x].id}
            title={recipes[x].title}
            img={recipes[x].img}
          />
        </Link>
      );
    }
    return RecipeCards;
  };

  return (
    <nav className="display-recipecards">
      {displayRecipeCards(recipeFromStore)}
    </nav>
  );
}
