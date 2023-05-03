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

export default function Search() {
  const addRecipeData = useRecipeStore((state) => state.addRecipes);
  const addMockData = useRecipeStore((state) => state.addMock);
  const [showFilters, setShowFilters] = useState(false);
  const [searchword, setSearchword] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [location, setLocation] = useState("All location");
  const navigate = useNavigate();

  //Used to grab whats typed into textfield. Den här omrenderas hela tiden, bättre att inte ha en use-state på den. Och bara ha submitknappen ta datan och skicka in i vad det nu är
  const handleChange = (e) => {
    setSearchword(e.target.value.toLowerCase());
  };

  //Checks if search is empty, makes API call and then sets the searchresult.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!searchword || !searchword.trim()) {
    //   alert("Please enter a search query.");
    //   return null;
    // }
    // console.log(searchword);
    // const data = await SearchRecipes(searchword);
    // if (data == null) {
    //   return alert("Nothing to show");
    // }
    addMockData();
    e.target.reset();
    setSearchword("");
  };

  //When API is called and recipeData-array is updated, only then will Store get the new values. Varför inte låta den gå direkt på addRecipeData?
  useEffect(() => {
    navigate("/searchresults"); //Detta gör att mnan direkt hamnar på searchresult och råkar man gå tillbaka till "huvudsidan" så får man inte tillgång till sökresultaten
  }, [recipeData]);

  return (
    <>
      <section className="flex justify-center h-32 m-4 bg-grayColor searchFilterArea">
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
            <button
              className="absolute filter-button top-12 right-0"
              onClick={() => setShowFilters(!showFilters)}
            >
              <img
                src={FilterIcon}
                className="filter-icon"
                alt="Filterbutton"
              />
            </button>

            {showFilters && <FilterButton />}
          </div>

          <Location setLocation={setLocation} />
        </div>
      </section>
    </>
  );
}
