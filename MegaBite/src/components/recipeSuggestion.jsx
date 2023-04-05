import RecipeCard from "./recipeCard";

export default function RecipeSuggestions() {
  return (
    <section className="">
      <div className="flex justify-between">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
}
