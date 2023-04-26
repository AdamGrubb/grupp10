import useRecipeStore from "../../hooks/useRecipeStore";


const Filter = () => {
    const stored = useRecipeStore((state) => state.recipeCollection)

    const filteredStore = [];

    const glutenFree = false;
    const dairyFree = true;
    const vegetarian = false;
    const vegan = false;
    const breakfast = true;
    const lunch = false;
    const dinner = false;

    console.log(stored);
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
        if (breakfast && !recipe.mealType[0].breakfast){
            return;
            }
        if (lunch && !recipe.mealType[1].lunch){
            return;
            }

        if (dinner && !recipe.mealType[2].dinner){
            return;
        }
            filteredStore.push(recipe)

    });

    console.log(filteredStore);
    return filteredStore;

}

export default Filter;



  