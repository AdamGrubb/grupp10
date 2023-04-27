import useRecipeStore from "../../hooks/useRecipeStore";

//hook instead of function
const useFilter = (glutenFree, dairyFree, vegetarian, vegan, breakfast, lunch, dinner) => {
    //Get the API-data stored in store
    const stored = useRecipeStore((state) => state.recipeCollection)

    const filteredStore = [];

    const glutenFree = false;
    const dairyFree = false;
    const vegetarian = false;
    const vegan = false;

    const breakfast = true;
    const lunch = false;
    const dinner = false;
    const allMealtypes = !breakfast && !lunch && !dinner;

    //breakfast && recipe.mealType.includes("breakfast")
    stored.forEach(recipe => {
        if (glutenFree && !recipe.allergens[0].glutenFree){
            return;
          }
        if (dairyFree && recipe.allergens[1].lactose){
            return;
            }
        if (vegetarian && !recipe.allergens[2].vegetarian){
            return;
            }
        if (vegan && !recipe.allergens[3].vegan){
            return;
            }
        if (breakfast && recipe.mealType[0].breakfast){
            filteredStore.push(recipe)
            return;
            }
        if (lunch && recipe.mealType[1].lunch){
            filteredStore.push(recipe)
            return;
            }
        if (dinner && recipe.mealType[2].dinner){
            filteredStore.push(recipe)
            return;
        }
        if (allMealtypes){
            filteredStore.push(recipe)
            return;
        }

    });

    return filteredStore;

}

export default function useFilter();



  