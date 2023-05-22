import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipeSuggestion.css";
import { Link } from "react-router-dom";
import { SearchRecipes } from "../API/SearchRecipes";
import useRecipeStore from "../../hooks/useRecipeStore";
import { useEffect } from "react";

export default function RecipeSuggestions() {
  //This gets the result from the randomRecipeCollection.
  const randomRecipesFromStore = useRecipeStore(
    (state) => state.randomRecipeCollection
  );
  const addRandomData = useRecipeStore((state) => state.addRandomRecipes);

  //When the page is mounted the load-function is fired
  useEffect(() => {
    loadRandomReceipes();
  }, []);

  // Gets a random keyword which is sent to the API call
  // and the result is added to the storefunction.
  const loadRandomReceipes = async () => {
    const randomKeyword = getRandomKeyword(keywords, 1);
    const data = await SearchRecipes(randomKeyword, 8);
    addRandomData(data);
  };

  const displayRandomRecipeCards = (recipes) => {
    // This array is storing the recipecard generated from the following for-loop.
    let RecipeCards = [];

    // This for-loop iterates over the array of recipes
    // sent in as a parameter and creates recipecards and sends objekt-information
    // to the recipe-page with the help of "State".
    for (let x = 0; x < recipes.length; x++) {
      RecipeCards.push(
        <Link
          className="w-44 md:w-auto"
          key={recipes[x].id}
          to="/recipepage"
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
    <div className="suggestionsBox">
      <h3>Recipe suggestions for you!</h3>
      <nav className="display-recipecards">
      {displayRandomRecipeCards(randomRecipesFromStore)}
    </nav>
      </div>
  );
}

const keywords = ["porridge", "pasta", "chicken", "pizza", "shrimps"];

const getRandomKeyword = (array, count) => {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};
