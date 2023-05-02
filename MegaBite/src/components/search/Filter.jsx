export const Filter = (recipes, filters) => {
  const filteredStore = [];

  const allMealtypes = !filters.breakfast && !filters.lunch && !filters.dinner;

  recipes.forEach((recipe) => {
    if (filters.glutenFree && !recipe.allergens[0].glutenFree) {
      return;
    }
    if (filters.dairyFree && !recipe.allergens[1].lactose) {
      return;
    }
    if (filters.vegetarian && !recipe.allergens[2].vegetarian) {
      return;
    }
    if (filters.vegan && !recipe.allergens[3].vegan) {
      return;
    }
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

export default Filter;
