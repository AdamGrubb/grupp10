import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Search.css";
import { SearchRecipes } from "../API/SearchRecipes";
import FilterButton from "./Filter";
import useRecipeStore from "../../hooks/useRecipeStore";
import Location from "./LocationFilter";
import dietaryFilter from "./dietaryFilter";


export default function Search() {
  const recipesFromApi = useRecipeStore((state) => state.recipeCollection);
  const addFilteredRecipes = useRecipeStore((state) => state.addFilteredRecipes);
  const addRecipeData = useRecipeStore((state) => state.addRecipes);
  const [showFilters, setShowFilters] = useState(false);
  const [searchword, setSearchword] = useState("");
  const [location, setLocation] = useState();
  
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  //Used to grab whats typed into textfield.
  const handleChange = (e) => {
    setSearchword(e.target.value.toLowerCase());
  };

  //Checks if search is empty, makes API call and then sets the searchresult.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchword || !searchword.trim()) {
      alert("Please enter a search query.");
      return null;
    }

    const data = await SearchRecipes(searchword);

    if (data == []) {//Doesn't really provide any functionality
      return alert("Nothing to show");
    }
  
    addRecipeData(data);

    e.target.reset();
    setSearchword("");
  };

    useEffect(() => {
    navigate("/searchresults");
    addFilteredRecipes(dietaryFilter(recipesFromApi, filters));
  }, [recipesFromApi, filters]);

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
              <h1>Filters</h1>
            </button>

            {showFilters && <FilterButton setFilters={setFilters} filters={filters}/>}
          </div>

          <Location setLocation={setLocation} />
        </div>
      </section>
    </>
  );
}
