import "./recipeCard.css";
import porridge from "../../assets/porridge.jpg";
import { Link } from "react-router-dom";

export default function RecipeCard() {
  return (
    <div className="recipeCard">
      <Link to="/recipePage">
        <img src={porridge} alt="recipe thumbnail" className="recipeThumb" />
      </Link>
      <div className="recipe-overlay">
        <div className="recipe-label">Recipe Name</div>
      </div>
    </div>
  );
}
