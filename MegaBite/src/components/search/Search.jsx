import { useNavigate } from "react-router-dom";
import "./Search.css";
import magnGlass from "../../assets/magnGlass.png";
import { SearchRecipes } from "../API/SearchRecipes";
// import AlertPopup from "../Utilities/Alert";
import React, { useState, useEffect } from "react";
import Filter from "./useFilter";
import useRecipeStore from "../../hooks/useRecipeStore";

export default function Search() {
  const [searchword, setSearchword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [glutenFree, setGlutenFree] = useState(true);
  const [dairyFree, setDairyFree] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [vegan, setVegan] = useState(false);
  const navigate = useNavigate();
  const [filteredRecipes, setFilteredRecipes] = useState(
    Filter(glutenFree, dairyFree, vegetarian, vegan, breakfast, lunch, dinner)
  );

  const addRecipeData = useRecipeStore((state) => state.addRecipes);
  const addingFilteredRecipes = useRecipeStore(
    (state) => state.addFilteredRecipes
  );

  //för att använda arrayen
  const useRecipeData = useRecipeStore((state) => state.recipeCollection);
  const useFilteredRecipeData = useRecipeStore(
    (state) => state.filteredRecipeCollection
  );

  const handleChange = (e) => {
    setSearchword(e.target.value.toLowerCase());
  };

  useEffect(() => {
    console.log(useRecipeData);
  }, [addRecipeData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchword || !searchword.trim()) {
      alert("Please enter a search query.");
      return null;
    }
    const data = await SearchRecipes(searchword);
    if (data == null) {
      return alert("Nothing to show");
    }
    addRecipeData(data);
    console.log(useRecipeData);
    const test = addingFilteredRecipes(filteredRecipes);
    console.log(test);
    console.log(useFilteredRecipeData);
    e.target.reset();
    setSearchword("");
  };

  return (
    <>
      <section className="flex justify-center h-24 mb-2 bg-searchAreaColor">
        <div className="flex flex-col items-center">
          <h4 className="align-text-center">Welcome to MegaBite!</h4>
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute btnSearch mt-7 top-0 right-0 h-full px-4 text-sm border-2 border-solid"
              >
                Search
              </button>
            </form>
            <button
              className="absolute top-0 right-0 h-full px-4 text-sm text-gray-500"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>

            {showFilters && (
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
            )}
          </div>
        </div>
      </section>
    </>
  );
}
