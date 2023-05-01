import { create } from "zustand";

//recipeCollection is used to store the collection of recipes that you get from the API-call. You use the addRecipe-function with an array as a parameter to replace the collection with a new array.
const useRecipeStore = create((set) => ({
  recipeCollection: [],

  //filteredRecipeCollection is used to store a filtered version of recipeCollection.
  filteredRecipeCollection: [],

  //You call on this function to store an array of recipe in recipeCollection. The parameter to the function is an array of recipes.
  addRecipes: (recipes) => set((state) => ({ recipeCollection: recipes })),

  //You call on this function to store an array of recipe in filteredRecipeCollection. The parameter to the function is an array of recipes.
  addFilteredRecipes: (recipes) =>
    set((state) => ({ filteredRecipeCollection: recipes })),

  //This function has no parameters and is called to fill the recipeCollection with mock-result. It is to be used to test functions without having to call the API for data.
}));

export default useRecipeStore;
