import RecipeCard from "../recipeCard/RecipeCard";
import { Link } from "react-router-dom";
import useRecipeStore from "../../hooks/useRecipeStore";

export default function SearchResults() {
  //This gets the result from the filteredRecipeCollection.
  const recipeFromStore = useRecipeStore(
    (state) => state.filteredRecipeCollection
  );

  const displayRecipeCards = (recipes) => {
    //This if-statement checks if the result from recipeStore is null or empty (0) and if its the case shows a "No Result".
    if (recipes == null || recipes.length < 1) {
      return <h1>No result</h1>;
    }

    //This array is storing the recipecard generated from the following for-loop.
    let RecipeCards = [];

    //This for-loop iterates over the array of recipes sent in as a parameter and creates recipecards and sends objekt-information to the recipe-page with the help of "State".
    for (let x = 0; x < recipes.length; x++) {
      RecipeCards.push(
        <Link to="/searchresults/recipepage" state={recipes[x]}>
          <RecipeCard title={recipes[x].title} img={recipes[x].img} />
        </Link>
      );
    }
    return RecipeCards;
  };

  return (
    <section className="w-56 lg:w-[28rem] mx-auto">
      <nav className="flex flex-row flex-wrap justify-left ">
        {displayRecipeCards(recipeFromStore)}
      </nav>
    </section>
  );
}
