//CSS ICONS
import "./Search.css";

import MagnifyingGlass from "../../assets/magnGlass.png";
import FilterIcon from "../../assets/filter.png";

//LOGIC
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SearchRecipes } from "../API/SearchRecipes";
import FilterButton from "./Filter";
import useRecipeStore from "../../hooks/useRecipeStore";
import Location from "./LocationFilter";
import dietaryFilter from "./dietaryFilter";

export default function Search() {
  const recipesFromApi = useRecipeStore((state) => state.recipeCollection);
  const addFilteredRecipes = useRecipeStore(
    (state) => state.addFilteredRecipes
  );
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
  // addMock();
  console.log(filters);

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

    if (data == []) {
      //Doesn't really provide any functionality
      return alert("Nothing to show");
    }

    addRecipeData(data);
  };

  useEffect(() => {
    navigate("/searchresults");
    addFilteredRecipes(dietaryFilter(recipesFromApi, filters, location));
  }, [recipesFromApi, filters, location]);

  return (
    <>
      <section
        id="search-section"
        className="flex justify-center mr-2 h-32 bg-grayColor searchFilterArea"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <div className="relative searchBoxWrapperDiv">
                <input
                  className="searchBox"
                  type="text"
                  onChange={handleChange}
                  placeholder="Search..."
                />
              </div>

              <button type="submit" id="btnSearch" className="image-transition">
                <img
                  src={MagnifyingGlass}
                  className="absolute magnifying-glass"
                  alt="Searchbutton as a magnifying glass"
                />
              </button>
            </form>
            <div className="filter-button">
              <button className="" onClick={() => setShowFilters(!showFilters)}>
                <img
                  src={FilterIcon}
                  className="filter-icon"
                  alt="Filterbutton"
                />
              </button>
            </div>

            {showFilters && (
              <FilterButton setFilters={setFilters} filters={filters} />
            )}
          </div>

          <Location setLocation={setLocation} />
        </div>
      </section>
    </>
  );
}
