import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Search.css";
import { SearchRecipes } from "../API/SearchRecipes";
import FilterButton from "./Filter";
import useRecipeStore from "../../hooks/useRecipeStore";
import Location from "./LocationFilter";

export default function Search() {
  const addRecipeData = useRecipeStore((state) => state.addRecipes);
  const [showFilters, setShowFilters] = useState(false);
  const [searchword, setSearchword] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  //Used to grab whats typed into textfield. Den här omrenderas hela tiden, bättre att inte ha en use-state på den. Och bara ha submitknappen ta datan och skicka in i vad det nu är
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
    console.log(searchword);
    const data = await SearchRecipes(searchword);
    if (data == null) {
      return alert("Nothing to show");
    }
    console.log(data);
    addRecipeData(data);
    e.target.reset();
    setSearchword("");
  };

  //When API is called and recipeData-array is updated, only then will Store get the new values. Varför inte låta den gå direkt på addRecipeData?
  useEffect(() => {
    // addRecipeData(recipeData); Denna gör så att resultatet i store ersätts vid useffect. Kommenterar ut då den nollställer sökresultatet.
    navigate("/searchresults"); //Detta gör att mnan direkt hamnar på searchresult och råkar man gå tillbaka till "huvudsidan" så får man inte tillgång till sökresultaten
  }, [recipeData]);

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

            {showFilters && <FilterButton />}
          </div>

          <Location setLocation={setLocation} />
        </div>
      </section>
    </>
  );
}
