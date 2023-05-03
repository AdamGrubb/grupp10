import { useState, useEffect, useRef } from "react";
import "./Search.css";

export default function Location({ setLocation }) {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleChange = (e) => {
    setLocation(e.target.value);
    setIsOpen(false);
  };
  return (
    <>
      <section
        className="btnSearch mt-2 mr-12 justify-self-start text-sm border-2 border-solid dropdown-container dropdown-wrapper"
        ref={dropdownRef}
      >
        <div
          className="bg-receptDescriptionColor dropdown-select"
          onClick={handleClick}
        >
          Select Locations
        </div>
        {isOpen && (
          <ul className="bg-receptDescriptionColor dropdown-list">
            {locationsArray.map((location) => (
              <li key={location.value} className="checkbox-item">
                <button
                  type="button"
                  value={location.value}
                  onClick={() => handleChange(location)}
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
