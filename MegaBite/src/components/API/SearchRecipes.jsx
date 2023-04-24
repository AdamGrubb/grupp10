export async function SearchRecipes(queryParams) {
  //API-key adds to the URL to be able to make API-calls
  const apikey = "e00dc2fe3f314cee86a4eb59100267ef";

  //The base URL uses incoming recipeId and inserts it into the URL.
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

  //If incoming variable is empty an error will be displayed
  if (!queryParams || !queryParams.toString().trim()) {
    alert("Please enter a search query.");
    return null;
  }

  //URLSearchParams is used to manipulate the URL.
  const searchParams = new URLSearchParams();
  searchParams.append("query", queryParams);
  searchParams.append("instructionsRequired", true);
  searchParams.append("apiKey", apikey);
  searchParams.append("number", 2);
  searchParams.append("addRecipeInformation", true);
  searchParams.append("fillIngredients", true);

  //API call, if there is an error the error will be shown otherwise we return the data.
  try {
    const response = await fetch(`${baseUrl}?${searchParams}`);
    const apiResults = await response.json();
    console.log(apiResults);
    const recipeArray = apiResults.results.map((item) => ({
      id: item.id,
      title: item.title,
      allergens: [
        { glutenFree: item.glutenFree },
        { lactose: item.dairyFree },
        { vegetarian: item.vegetarian },
        { vegan: item.vegan },
      ],
      servings: item.servings,
      description: [...item.analyzedInstructions[0].steps],
      ingredients: [...item.extendedIngredients],
      img: item.image,
    }));
    return recipeArray;
  } catch (error) {
    // Show an error message to the user using console.error() or a UI element
    console.error(error);
    return null;
  }
}
