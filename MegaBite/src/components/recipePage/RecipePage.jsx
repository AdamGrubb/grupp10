import porridge from "../../assets/porridge.jpg";
import RecipeSuggestions from "../recipeSuggestions/RecipeSuggestion";
import { useNavigate } from "react-router-dom";
import "./RecipePage.css";
export default function RecipePage() {
  
  const navigate = useNavigate();
  
  const recipe = {
  title: "Oatmeal porridge",
  ingredients: ["havregryn", "vatten", "salt", "salt", "salt", "salt","havregryn", "vatten", "salt", "salt", "salt"],
  description: "Koka upp vatten och havregryn och rör om under tiden.",
  time: 12,
  portions: 4,
  allergies: ["egg", "vegan"]
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
          <ul style={{listStyle: 'disc'}} className="info bg-receptDescriptionColor">
            <li>portions:{recipe.portions}portions:{recipe.portions}</li>
            <li>allergies: {recipe.allergies}</li>
            <li>time:{recipe.time}</li>
            </ul>
        </section>

        <section className="ingredients bg-receptDescriptionColor">
          <h2 id="big">Ingredients:</h2>
        <ul style={{listStyle: 'disc'}}> 
          {recipe.ingredients.map(item => ( <li key={item}>{item}</li> ))}
           </ul>
        </section>

        <section className= "description bg-receptDescriptionColor">
          <h2 id="big">Description:</h2>
          <ul>
            <li>
              <p>{recipe.description}</p>
            </li>
          </ul>
        </section>
        </div>
      </article>

      {/* Vi har ju redan gjort en tidigare hämtning när man sökte receptet, kan ju skapa en suggestion-här då.
      <RecipeSuggestions/> */}
    </>
  );
}