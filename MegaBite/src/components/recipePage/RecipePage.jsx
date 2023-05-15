//import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import { useNavigate, useLocation } from "react-router-dom";
import "./RecipePage.css";
import "../../index.css";
import Portions from "./PortionsFunction";
import React, { useState, useEffect } from "react";
export default function RecipePage() {
  const navigate = useNavigate();
  const [portions, setPortions] = useState(4);
  const location = useLocation();
  const recipeReal = location.state;


  // When a recipe is clicked on it sends the user to the top of the page, 
  // this is to prevent having to scroll up on the recipe page if the recipe was lower down in the list in the search results
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function checkItemUnit(itemUnit) {
    if (!itemUnit) {
      return null;
    }
    if (itemUnit) {
      return itemUnit + " ";
    }
  }

  // OBJECT FOR CLOCK LOGO
  let clock = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  //OBJECT FOR PORTIONS LOGO
  let portionsInfo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );

  return (
    <>
      <article>
        <button className="btnGoBack rounded" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="recipeTitle border-current rounded-full">
          {recipeReal.title}
        </div>
        <div className="showContent">
          <img
            className="img rounded-lg"
            id="pictureOfDish"
            src={recipeReal.img}
            alt="Picture of dish"
          />
          <div className="infoBox">
            <section id="ServingsAndAllergens" className="">
              <div className="info newColour rounded-lg">
                <div className="flex">
                  <p className="flex">
                    {clock} &ensp; {recipeReal.readyInMinutes} Min
                  </p>
                  <div className="flex portions">
                    <p>{portionsInfo}</p>
                    <select
                      className="newColour"
                      onChange={(e) => setPortions(e.target.value)}
                      defaultValue={4}
                    >
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option> <option value="8">8</option>
                    </select>
                  </div>
                </div>
                {/* <div className="flex">
                  <p>Allergens:&ensp;</p>
                  {recipeReal.allergens.map((item) => (
                    <span key={item}>{item.id}</span>
                  ))}
                </div> */}
              </div>
            </section>
            {/* Här klagar den ibland på att ingredienserna får samma key, ibland lägger den nämligen in samma ingrediens två gånger. Typ olika varianter av mängd smör i recept ger flera element med samma id. Se Banana Butter Pie. 
                Ett alternativ skulle vara att använda "cleanName" då id:t blir unikt på riktigt.*/}
            <section className="ingredients newColour rounded-lg">
              <h2 id="big">Ingredients:</h2>
              <div>
                {recipeReal.ingredients.map((item) => (
                  <li key={item.id}>
                    {Portions(
                      portions,
                      recipeReal.servings,
                      item.measures.us.amount
                    )
                      .toFixed(1)
                      .replace(/[.,]0$/, "")}
                    &ensp;
                    {checkItemUnit(item.measures.us.unitShort)}
                    {item.name}
                  </li>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="showDescription showContent">
          <section className="description newColour rounded-lg">
            <h2 id="big">Description:</h2>
            {recipeReal.description.map((item) => (
              <li className="mr-5" key={item.number}>
                {item.step}
              </li>
            ))}
          </section>

          {/* THIS SECTION MIGHT NEED SOME CHANGES WHEN RECIPE-SUGGESTIONS-TASK IS DONE */}
          {/* <section className="recipeSuggestion">
            <h2 id="big">Suggestions</h2>
            <div>{<RecipeSuggestions />}</div>
          </section> */}
        </div>
      </article>
    </>
  );
}
