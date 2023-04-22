export async function SingleRecipe(recipeId) {
  //   https://api.spoonacular.com/recipes/{id}/information
  //   https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
  const apikey = "e00dc2fe3f314cee86a4eb59100267ef";
  const baseUrl = `https://api.spoonacular.com/recipes/${recipeId}/information`;

  const searchParams = new URLSearchParams();

  searchParams.append("includeNutrition", false);
  searchParams.append("apiKey", apikey);

  const response = await fetch(`${baseUrl}?${searchParams}`);
  const results = await response.json();
  return results;
}
