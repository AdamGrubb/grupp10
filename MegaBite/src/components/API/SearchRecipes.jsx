export async function SearchRecipes(queryParams) {
  //https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=40
  const apikey = "e00dc2fe3f314cee86a4eb59100267ef";
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

  const searchParams = new URLSearchParams();

  searchParams.append("query", queryParams);
  searchParams.append("instructionsRequired", true);
  searchParams.append("apiKey", apikey);
  searchParams.append("number", 40);
  

  const response = await fetch(`${baseUrl}?${searchParams}`);
  const results = await response.json();
  return results;
}

//   Object.keys(queryParams).forEach((key) => {
//     searchParams.append(key, queryParams[key]);
//   });
