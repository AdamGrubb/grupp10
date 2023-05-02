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
      {" "}
      <section className="btnSearch mt-2 mr-12 justify-self-start text-sm border-2 border-solid dropdown-container">
        {" "}
        <select
          ref={dropdownRef}
          className="bg-receptDescriptionColor dropdown-list"
          onChange={handleChange}
          onClick={handleClick}
        >
          {" "}
          {locationsArray.map((location) => (
            <option key={location.value} value={location.value}>
              {" "}
              {location.displayText}{" "}
            </option>
          ))}{" "}
        </select>{" "}
      </section>{" "}
    </>
  );
}
