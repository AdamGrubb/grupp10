import "./RecipeCard.css";

export default function RecipeCard(props) {
  return (
    <div key={props.id} className="recipeCard m-2" title={props.title}>
      <img src={props.img} alt="recipe thumbnail" className="recipeThumb" />
      <div className="recipe-overlay">
        <div className="recipe-label"> {props.title}</div>
      </div>
    </div>
  );
}
