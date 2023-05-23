export const dietaryFilter = (recipes, filters, location) => {
  const filteredStore = [];

  //Handles if no mealtype is chosen. The user is then expected to want all mealtypes.
  const allMealtypes = !filters.breakfast && !filters.lunch && !filters.dinner;

  recipes.forEach((recipe) => {
    //Allergens/diets - Checks chosen allergens/diets and passes on recipes with no match
    if (filters.glutenFree && !recipe.allergens[0].glutenFree) {
      return;
    }
    if (filters.dairyFree && !recipe.allergens[1].dairyFree) {
      return;
    }
    if (filters.vegetarian && !recipe.allergens[2].vegetarian) {
      return;
    }
    if (filters.vegan && !recipe.allergens[3].vegan) {
      return;
    }

    //Location - Checks if location is chosen/gotten and passes on recipes with no match
    if (!location == "" && !recipe.cuisine.includes(location)) {
      return;
    }

    //Mealtype - Checks chosen mealtypes and adds to array "filteredStore" when corresponding
    if (filters.breakfast && recipe.mealType.includes("breakfast")) {
      filteredStore.push(recipe);
      return;
    }
    if (filters.lunch && recipe.mealType.includes("lunch")) {
      filteredStore.push(recipe);
      return;
    }
    if (filters.dinner && recipe.mealType.includes("dinner")) {
      filteredStore.push(recipe);
      return;
    }
    if (allMealtypes) {
      filteredStore.push(recipe);
      return;
    }
  });
  return filteredStore;
};

export default dietaryFilter;
