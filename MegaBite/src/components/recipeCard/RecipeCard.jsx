import "./recipeCard.css";
import porridge from "../../assets/porridge.jpg";
import { Link } from "react-router-dom";

export default function RecipeCard() {
  return (
    <div className="recipeCard">
      <img src={porridge} alt="recipe thumbnail" className="recipeThumb" />
      <div className="recipe-overlay">
        <div className="recipe-label">Recipe Name</div>
      </div>
    </div>
  );
}
