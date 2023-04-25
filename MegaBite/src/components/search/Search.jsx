import { useNavigate, useSearchParams } from "react-router-dom";
import "./Search.css";
import magnGlass from "../../assets/magnGlass.png";
import { SearchRecipes } from "../API/SearchRecipes";
import AlertPopup from "../Utilities/Alert";
import React, { useState } from "react";

export default function Search() {
  const [searchword, setSearchword] = useState("");

  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchword(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchword);
    const data = await SearchRecipes(searchword);
    setRecipeData(data);
    console.log(data);
    e.target.reset();
    setSearchword("");
  };

  return (
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
        </div>
      </div>
    </section>
  );
}
