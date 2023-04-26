import { useNavigate } from "react-router-dom";
import "./Search.css";
import magnGlass from "../../assets/magnGlass.png";
import { SearchRecipes } from "../API/SearchRecipes";
// import AlertPopup from "../Utilities/Alert";
import React, { useState } from "react";

export default function Search() {
  const [searchword, setSearchword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchword(e.target.value.toLowerCase());
  };

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
    setRecipeData(data);
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
          </div>
          {showFilters && (
            <div
              className="absolute top-full left-0 right-0 px-4 py-2 border rounded shadow"
              style={{ backgroundColor: "gray", zIndex: 1 }}
            >
              <div className="flex items-center">
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
            </div>
          )}
        </div>
      </section>
    </>
  );
}
