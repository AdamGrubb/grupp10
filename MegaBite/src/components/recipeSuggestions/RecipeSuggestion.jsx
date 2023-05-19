import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipeSuggestion.css";
import { Link } from "react-router-dom";
import { SearchRecipes } from "../API/SearchRecipes";
import useRecipeStore from "../../hooks/useRecipeStore";
import { useEffect } from "react";

export default function RecipeSuggestions() {
  const randomRecipesFromStore = useRecipeStore(
    (state) => state.randomRecipeCollection
  );
  const addRandomData = useRecipeStore((state) => state.addRandomRecipes);

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = async () => {
    const randomKeyword = getRandomKeyword(keywords, 1);
    const data = await SearchRecipes(randomKeyword, 3);
    console.log(data);
    addRandomData(data);
  };

  const displayRandomRecipeCards = (recipes) => {
    //This if-statement checks if the result from recipeStore is null or empty (0) and if its the case shows a "No Result".
    // if (recipes == null || recipes.length < 1) {
    //   return <h1 className="noResult">No result</h1>;
    // }

    //This array is storing the recipecard generated from the following for-loop.
    let RecipeCards = [];

    //This for-loop iterates over the array of recipes sent in as a parameter and creates recipecards and sends objekt-information to the recipe-page with the help of "State".
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
    <nav className="display-recipecards">
      {displayRandomRecipeCards(randomRecipesFromStore)}
    </nav>
  );
}

const keywords = ["porridge", "pasta", "chicken", "pizza", "shrimps"];

const getRandomKeyword = (array, count) => {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};
