import { useState, useEffect, useRef } from "react";
import "./Search.css";

export default function Location() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const locationsArray = [
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
                <label>
                  <input type="checkbox" value={location.value} />
                  {location.displayText}
                </label>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
