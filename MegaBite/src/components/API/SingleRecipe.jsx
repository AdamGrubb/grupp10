export async function SingleRecipe(recipeId) {
  //Example URL
  //   https://api.spoonacular.com/recipes/{id}/information
  //   https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

  //API-key adds to the URL to be able to make API-calls
  const apikey = "e00dc2fe3f314cee86a4eb59100267ef";

  //The base URL uses incoming recipeId and inserts it into the URL.
  const baseUrl = `https://api.spoonacular.com/recipes/${recipeId}/information`;

  //URLSearchParams is used to manipulate the URL.
  const searchParams = new URLSearchParams();
  searchParams.append("includeNutrition", false);
  searchParams.append("apiKey", apikey);

  //API call, if there is an error the error will be shown otherwise we return the data.
  try {
    const response = await fetch(`${baseUrl}?${searchParams}`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    // Show an error message to the user using console.error() or a UI element
    return null;
  }
}
