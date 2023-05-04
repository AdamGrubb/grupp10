import { useState, useEffect, useRef } from "react";
import "./LocationFilter.css";

export default function Location({ setLocation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Locations"); // visar location
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const locationsArray = [
    { value: "", displayText: "All Locations" },
    { value: "African", displayText: "African" },
    { value: "American", displayText: "American" },
    { value: "Chinese", displayText: "Chinese" },
    { value: "European", displayText: "European" },
    { value: "Greek", displayText: "Greek" },
    { value: "Japanese", displayText: "Japanese" },
    { value: "Mexican", displayText: "Mexican" },
    { value: "Middle Eastern", displayText: "Middle Eastern" },
    { value: "Thai", displayText: "Thai" },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleChange = (location) => {
    setLocation(location.value);
    setSelectedLocation(location.displayText);
    setIsOpen(false);
  };

  return (
    <>
      <section
        className="dropdown-section mt-2 mr-12 justify-self-start text-sm border-2 border-solid dropdown-container dropdown-wrapper"
        ref={dropdownRef}
      >
        <div className="dropdown-select" onClick={handleClick}>
          {selectedLocation}
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {locationsArray.map((location) => (
              <li key={location.value} className="checkbox-item">
                <button
                  className="btnRegion"
                  type="button"
                  onClick={() => handleChange(location)} // Removed 'value' attribute
                >
                  {location.displayText}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
