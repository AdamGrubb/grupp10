import { dialogActionsClasses } from "@mui/material";
import useRecipeStore from "../../hooks/useRecipeStore";
import { useEffect, useState } from "react";

//hook instead of function
export function FilteredStore(
  glutenFree,
  dairyFree,
  vegetarian,
  vegan,
  breakfast,
  lunch,
  dinner
) {
  //Get the API-data stored in store
  const stored = useRecipeStore((state) => state.recipeCollection);

  const filteredStore = [];

  glutenFree = false;
  dairyFree = false;
  vegetarian = false;
  vegan = false;

  breakfast = true;
  lunch = false;
  dinner = false;
  const allMealtypes = !breakfast && !lunch && !dinner;

  //breakfast && recipe.mealType.includes("breakfast")
  stored.forEach((recipe) => {
    if (glutenFree && !recipe.allergens[0].glutenFree) {
      return;
    }
    if (dairyFree && recipe.allergens[1].lactose) {
      return;
    }
    if (vegetarian && !recipe.allergens[2].vegetarian) {
      return;
    }
    if (vegan && !recipe.allergens[3].vegan) {
      return;
    }
    if (breakfast && recipe.mealType[0].breakfast) {
      filteredStore.push(recipe);
      return;
    }
    if (lunch && recipe.mealType[1].lunch) {
      filteredStore.push(recipe);
      return;
    }
    if (dinner && recipe.mealType[2].dinner) {
      filteredStore.push(recipe);
      return;
    }
    if (allMealtypes) {
      filteredStore.push(recipe);
      return;
    }
  });

  return filteredStore;
}

export default function Filter() {
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [vegan, setVegan] = useState(false);

  const [test, setTest] = useState(
    FilteredStore(
      vegetarian,
      glutenFree,
      dairyFree,
      breakfast,
      dinner,
      lunch,
      vegan
    )
  );

  useEffect(() => {
    setTest();
    console.log(test);
    console.log(
      vegetarian,
      glutenFree,
      dairyFree,
      breakfast,
      dinner,
      lunch,
      vegan
    );
  }, [vegetarian, glutenFree, dairyFree, breakfast, dinner, lunch, vegan]);

  return (
    <>
      <div
        className="absolute top-full left-0 right-0 px-4 py-2 border rounded shadow"
        style={{ backgroundColor: "gray", zIndex: 1 }}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            id="breakfast"
            checked={breakfast}
            onChange={(e) => setBreakfast(e.target.checked)}
          />
          <label htmlFor="breakfast" className="ml-2">
            Breakfast
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="lunch"
            checked={lunch}
            onChange={(e) => setLunch(e.target.checked)}
          />
          <label htmlFor="lunch" className="ml-2">
            Lunch
          </label>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            id="dinner"
            checked={dinner}
            onChange={(e) => setDinner(e.target.checked)}
          />
          <label htmlFor="dinner" className="ml-2">
            Dinner
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="gluten-free"
            checked={glutenFree}
            onChange={(e) => setGlutenFree(e.target.checked)}
          />
          <label htmlFor="gluten-free" className="ml-2">
            Gluten-free
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="dairy-free"
            checked={dairyFree}
            onChange={(e) => setDairyFree(e.target.checked)}
          />
          <label htmlFor="dairy-free" className="ml-2">
            Dairy-free
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="vegan"
            checked={vegan}
            onChange={(e) => setVegan(e.target.checked)}
          />
          <label htmlFor="vegan" className="ml-2">
            Vegan
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="vegetarian"
            checked={vegetarian}
            onChange={(e) => setVegetarian(e.target.checked)}
          />
          <label htmlFor="vegetarian" className="ml-2">
            Vegetarian
          </label>
        </div>
      </div>
    </>
  );
}
