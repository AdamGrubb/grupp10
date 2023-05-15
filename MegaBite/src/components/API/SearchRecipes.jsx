import ResponseOK from "./ResponseOK";

export async function SearchRecipes(queryParams) {
  //API-key adds to the URL to be able to make API-calls
  const apikey = "6224658806df44eaa8ccb7cfc9abe6e9";

  //6224658806df44eaa8ccb7cfc9abe6e9 JACOB
  //e00dc2fe3f314cee86a4eb59100267ef JOHANNES
  //29f9e7adbc11492184269307e04a5dad JONATHAN S

  //Set the url to call the SpoonacularApi function
  const baseUrl = "/.netlify/functions/SpoonacularApi";

  //URLSearchParams is used to manipulate the URL.
  const searchParams = new URLSearchParams();
  searchParams.append("query", queryParams);
  searchParams.append("instructionsRequired", true);
  searchParams.append("number", 50);
  searchParams.append("addRecipeInformation", true);
  searchParams.append("fillIngredients", true);

  //API call, if there is an error the error will be shown otherwise we return the data.
  try {
    const response = await fetch(`${baseUrl}?${searchParams}`);
    if (ResponseOK(response)) {
      const apiResults = await response.json();
      const recipeArray = apiResults.results.map((item) => {
        const instructions =
          item.analyzedInstructions.length > 0
            ? [...item.analyzedInstructions[0].steps]
            : [];
        const cuisineAreas = item.cuisines.length > 0 ? [...item.cuisines] : [];
        return {
          id: item.id,
          title: item.title,
          allergens: [
            { glutenFree: item.glutenFree },
            { lactose: item.dairyFree },
            { vegetarian: item.vegetarian },
            { vegan: item.vegan },
          ],
          readyInMinutes: item.readyInMinutes,
          servings: item.servings,
          description: instructions,
          ingredients: [...item.extendedIngredients],
          img: item.image,
          mealType: item.dishTypes,
          cuisine: cuisineAreas,
        };
      });
      return recipeArray;
    } else {
      return response.status;
    }
  } catch (error) {
    // Show an error message to the user using console.error() or a UI element
    console.error(error);
    return null;
  }
}
