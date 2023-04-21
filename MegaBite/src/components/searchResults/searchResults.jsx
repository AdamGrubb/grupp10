import RecipeCard from "../recipeCard/RecipeCard";
import arrow from "../../assets/arrow.png";
import "./searchResults.css";
import { Link } from "react-router-dom";

export default function SearchResults() {
  //Den här ska bytas ut om en array av recept som hämtar från store.
  const recipeFromStore = 30;

  //Här ska jag ändra så att den tar emot en array av recept istället. Placeholdern är antal recept istället.
  const displayRecipeCards = (recipes) => {
    let RecipeCards = [];
    //Här får du göra om till en map-funktion som stoppar in props till card så rätt bild och titel kommer in där. Sen att man skickar själva objektet till recipe-sidan med objekt via state.
    for (let x = 0; x < recipes; x++) {
      RecipeCards.push(
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
      );
      console.log(x);
    }
    return RecipeCards;
  };

  return (
    <section className="">
      <nav className="search-results">
        <img className="arrow-img" src={arrow} alt="Previous" />
        {displayRecipeCards(recipeFromStore)}
        <img className="arrow-img" src={arrow} alt="Next" />
      </nav>
    </section>
  );
}
