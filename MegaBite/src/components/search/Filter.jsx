import useRecipeStore from "../../hooks/useRecipeStore";
import { useEffect, useState } from "react";
import { dietaryFilter } from "./dietaryFilter";


export default function FilterButton({setFilters}, {filters}) {
  const recipesFromApi = useRecipeStore((state) => state.recipeCollection);
  const addFilteredRecipes = useRecipeStore((state) => state.addFilteredRecipes);

  const filterSet = () => {
    addFilteredRecipes(dietaryFilter(recipesFromApi, filters));
  }

  useEffect(() => {
    filterSet();
  }, [filters]);

  return (
    <>
      <div
        className="absolute top-full left-0 right-0 px-4 py-2 border rounded shadow"
        style={{ backgroundColor: "gray", zIndex: 1 }}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            name="breakfast"
            checked={filters.breakfast}
            onChange={(e) => {
              setFilters({ ...filters, breakfast: e.target.checked }
                );
            }}
          />
          <label htmlFor="breakfast" className="ml-2">
            Breakfast
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="lunch"
            checked={filters.lunch}
            onChange={(e) => {
              setFilters({ ...filters, lunch: e.target.checked });
            }}
          />
          <label htmlFor="lunch" className="ml-2">
            Lunch
          </label>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="dinner"
            checked={filters.dinner}
            onChange={(e) => {
              setFilters({ ...filters, dinner: e.target.checked });
            }}
          />
          <label htmlFor="dinner" className="ml-2">
            Dinner
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="glutenFree"
            checked={filters.glutenFree}
            onChange={(e) => {
              setFilters({ ...filters, glutenFree: e.target.checked });
            }}
          />
          <label htmlFor="gluten-free" className="ml-2">
            Gluten-free
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="dairyFree"
            checked={filters.dairyFree}
            onChange={(e) => {
              setFilters({ ...filters, dairyFree: e.target.checked });
            }}
          />
          <label htmlFor="dairy-free" className="ml-2">
            Dairy-free
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="vegan"
            checked={filters.vegan}
            onChange={(e) => {
              setFilters({ ...filters, vegan: e.target.checked });
            }}
          />
          <label htmlFor="vegan" className="ml-2">
            Vegan
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="vegetarian"
            checked={filters.vegetarian}
            onChange={(e) => {
              setFilters({ ...filters, vegetarian: e.target.checked });
            }}
          />
          <label htmlFor="vegetarian" className="ml-2">
            Vegetarian
          </label>
        </div>
        {/* <button onClick={} className="border">Set Filter</button> */}
      </div>
    </>
  );
}

// const filteringArray = (arr, filter) => {
//   return arr.filter((item) => {
//     return (
//       (filter.vegetarian && item.vegetarian) ||
//       (filter.vegan && item.vegan) ||
//       (filter.glutenFree && item.glutenFree) ||
//       (filter.dairyFree && item.dairyFree) ||
//       (filter.breakfast && item.mealType === "Breakfast") ||
//       (filter.lunch && item.mealType === "Lunch") ||
//       (filter.dinner && item.mealType === "Dinner")
//     );
//   });
// };
