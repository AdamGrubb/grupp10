import "./recipeCard.css";
import porridge from "../../assets/porridge.jpg";

export default function RecipeCard(props) {
  return (
    <div key={props.id} className="recipeCard">
      <img src={props.img} alt="recipe thumbnail" className="recipeThumb" />
      <div className="recipe-overlay">
        <div className="recipe-label"> {props.title}</div>
      </div>
    </div>
  );
}
