import porridge from "../../assets/porridge.jpg";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import { useNavigate } from "react-router-dom";
import "./RecipePage.css";
export default function RecipePage() {
  
  const navigate = useNavigate();
  //const [Portions, setPortions] = useState(4);

  // Variabel för klockikonen i inforutan
  let clock = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>;

  //variabeln för portions ikonen i inforutan
  let portions = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>;

  //Tillfällig variabel för att läsa ett recept
  const recipe = {
  title: "Oatmeal porridge",
  ingredients: ["havregryn", "vatten", "salt", "salt", "salt", "salt","havregryn", "vatten", "salt", "salt", "salt",
  "havregryn", "vatten", "salt", "salt", "salt"],
  description: ["Koka upp vatten och havregryn och rör om under tiden.", "Koka upp vatten och havregryn och rör om under tiden."
,"Koka upp vatten och havregryn och rör om under tiden.", "Koka upp vatten och havregryn och rör om under tiden."],
  time: 12,
  portions: 4,
  allergens: ["egg", "vegan"]
};

return (
  // Denna renderas mellan header & footer på huvusidan. Article kommer vara diven som skyfflar om sectionerna beroende på storlek på skärmen så de hamnar rätt.
  // Förslagsvis skulle denna kunna ta emot ett recept med all info som prop och sen fördela ut informationen på sektionerna.
  // h3-taggarna är placeholders och ska ersättas av lämpliga element och upplägg t ex UL för ingredienser osv. Id är placeholder för att hålla reda på vilka delar av figman de motsvarar.
  // 
  
  <>
      <article>
      <button className="btnGoBack" onClick={() => navigate(-1)}>
          Go Back
      </button>
      <div className="flex box flex-col" >
        <img className="img" id="pictureOfDish" src={porridge} alt="Picture of dish" />
        <h1 className="recipeTitle">{recipe.title}</h1>
        <section id="ServingsAndAllergens" className="">
          <div className="info bg-receptDescriptionColor">
            <div className="flex">
            <p className="flex">{clock} &ensp; {recipe.time} Min</p>
            <div className="flex portions">{portions} &ensp;
            <select className="bg-receptDescriptionColor">
            <option value= "4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
  </select>Portions</div>
            </div>
            <p>Allergens: {recipe.allergens}</p>
            </div>
        </section>

        <section className="ingredients bg-receptDescriptionColor">
          <h2 id="big">Ingredients:</h2>
        <div> 
          {recipe.ingredients.map(item => ( <li key={item}>{item}</li> ))}
           </div>
        </section>

        <section className= "description bg-receptDescriptionColor">
          <h2 id="big">Description:</h2>
          <div>
            <li>{recipe.description.map(item => ( <li key={item}>{item}</li> ))}</li>
          </div>
        </section>

        <section className="recipeSuggestion">
          <h2 id="big">Suggestions</h2>
          <div>{<RecipeSuggestions/>}</div>
        </section>

        </div>

      </article>

    </>
);
}