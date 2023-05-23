import { create } from "zustand";

//recipeCollection is used to store the collection of recipes that you get from the API-call. You use the addRecipe-function with an array as a parameter to replace the collection with a new array.
const useRecipeStore = create((set) => ({
  recipeCollection: [],

  //filteredRecipeCollection is used to store a filtered version of recipeCollection.
  filteredRecipeCollection: [],

  //Used to store recipes from the RecipeSuggestion component.
  randomRecipeCollection: [],

  //You call on this function to store an array of recipe in recipeCollection.
  addRecipes: (recipes) => set((state) => ({ recipeCollection: recipes })),

  //You call on this function to store an array of recipe in filteredRecipeCollection.
  addFilteredRecipes: (recipes) =>
    set((state) => ({ filteredRecipeCollection: recipes })),

  //Used to add recipes to randomRecipeCollection
  addRandomRecipes: (recipes) =>
    set((state) => ({ randomRecipeCollection: recipes })),

  //This function clears the array of recipes.
  clearRecipes: () => set((state) => ({ recipeCollection: [] })),
}));

export default useRecipeStore;
