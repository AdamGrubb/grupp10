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
    for (let x = 0; x < recipes; x++) {
      RecipeCards.push(
        <Link to="/searchresults/recipepage">
          <RecipeCard />
        </Link>
      );
      console.log("Hejh");
    }
    return RecipeCards;
    //Här får du göra om till en map-funktion som stoppar in props till card så rätt bild och titel kommer in där. Sen att man skickar själva objektet till recipe-sidan med objekt via state.
  };

  return (
    <section className="">
      <nav className="flex flex-row flex-wrap justify-left">
        {/* <img className="arrow-img" src={arrow} alt="Previous" /> */}
        {displayRecipeCards(recipeFromStore)}
        {/* <img className="arrow-img" src={arrow} alt="Next" /> */}
      </nav>

      {/* <div className="bg-slate-950 basis-28 text-center">Div 2</div>
        <div className="bg-slate-950 basis-28 text-center">Div 3</div>
        <div className="bg-slate-950 basis-28 text-center">Div 1</div>
        <div className="bg-slate-950 basis-28 text-center">Div 4</div>
        <div className="bg-slate-950 basis-28 text-center">Div 5</div>
        <div className="bg-slate-950 basis-28 text-center">Div 6</div>
        <div className="bg-slate-950 basis-28 text-center">Div 7</div>
        <div className="bg-slate-950 basis-28 text-center">Div 8</div>
        <div className="bg-slate-950 basis-28 text-center">Div 9</div> */}
    </section>
  );
}
