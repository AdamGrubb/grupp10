import { Link, useNavigate } from "react-router-dom";
import "./Search.css";
import magnGlass from "../../assets/magnGlass.png";


import React, { useState } from "react";

export default function Search() {
  const [showFilters, setShowFilters] = useState(false);
  const [dinner, setDinner] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [breakfast, setBreakfast] = useState(true);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="flex justify-center h-24 mb-2 bg-searchAreaColor">
      <div className="flex flex-col items-center">
        <h4 className="align-text-center">Welcome to MegaBite!</h4>
        <div className="relative">
          <input type="text" name="" id="" placeholder="Search..." />
          <button
            className="absolute top-0 right-0 h-full px-4 text-sm text-gray-500"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </button>
          <button
            type="submit"
            onClick={() => {
              navigate("/searchresults");
            }}
            className="absolute btnSearch mt-7 top-0 right-0 h-full px-4 text-sm border-2 border-solid"
          >
            Search
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
  );
}
