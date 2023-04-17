import porridge from "../../assets/porridge.jpg";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import { Link } from "react-router-dom";
import "./RecipePage.css";
export default function RecipePage() {
  return (
    // Denna renderas mellan header & footer på huvusidan. Article kommer vara diven som skyfflar om sectionerna beroende på storlek på skärmen så de hamnar rätt.
    // Förslagsvis skulle denna kunna ta emot ett recept med all info som prop och sen fördela ut informationen på sektionerna.
    // h3-taggarna är placeholders och ska ersättas av lämpliga element och upplägg t ex UL för ingredienser osv. Id är placeholder för att hålla reda på vilka delar av figman de motsvarar.
    //
    <>
      <article>
        <Link id="btnGoBack" to="/">
          Go back
        </Link>
        <img id="pictureOfDish" src={porridge} alt="Picture of dish" />

        <h2 id="dishName">Name of the dish</h2>

        <section id="ServingsAndAllergens">
          <h3>IMPORTERA Nutrition Facts</h3>
        </section>

        <section id="ingredients">
          <h3>IMPORTERA ingredients</h3>
        </section>

        <section id="cooking">
          <h3>IMPORTERA How to Make</h3>
        </section>
      </article>

      {/* Vi har ju redan gjort en tidigare hämtning när man sökte receptet, kan ju skapa en suggestion-här då.
      <RecipeSuggestions/> */}
    </>
  );
}
