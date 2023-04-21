export async function SearchRecipes(queryParams) {
  const apikey = "e00dc2fe3f314cee86a4eb59100267ef";
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
  

  const searchParams = new URLSearchParams();

  console.log(queryParams); // Add this line to debug the issue

  if (!queryParams || !queryParams.toString().trim()) {
    alert("Please enter a search query.");
    return null;
  }

  searchParams.append("query", queryParams);
  searchParams.append("instructionsRequired", true);
  searchParams.append("apiKey", apikey);
  searchParams.append("number", 40);

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