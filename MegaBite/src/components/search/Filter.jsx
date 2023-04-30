 import useRecipeStore from "../../hooks/useRecipeStore";
 
 export const Filter = ( recipes, filters
    // glutenFree,
    // dairyFree,
    // vegetarian,
    // vegan,
    // breakfast,
    // lunch,
    // dinner
  ) => {

    // const addFilteredRecipes = useRecipeStore((state) => state.addFilteredRecipes);
  
    // const recipeCollection = useRecipeStore(
    //   (state) => state.recipeCollection
    // );
    //Get the API-data stored in store
  
    const filteredStore = [];
  
    // const glutenFree = false;
    // const dairyFree = false;
    // const vegetarian = false;
    // const vegan = false;
  
    // const breakfast = true;
    // const lunch = false;
    // const dinner = false;
    // const allMealtypes = !breakfast && !lunch && !dinner;
  
    //breakfast && recipe.mealType.includes("breakfast")
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
      if (filters.breakfast && recipe.mealType[0].breakfast) {
        filteredStore.push(recipe);
        return;
      }
      if (filters.lunch && recipe.mealType[1].lunch) {
        filteredStore.push(recipe);
        return;
      }
      if (filters.dinner && recipe.mealType[2].dinner) {
        filteredStore.push(recipe);
        return;
      }
      filteredStore.push(recipe);
      // if (allMealtypes) {
      //   filteredStore.push(recipe);
      //   return;
      // }
    });
    // console.log("updated filtered store", filteredStore);
    // addFilteredRecipes(filteredStore);
    return filteredStore;
  }
  
  export default Filter;

 