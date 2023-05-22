import { useState, useEffect, useRef } from "react";
import "./LocationFilter.css";
import { LocationCuisine } from "./LocationCuisine";
import locationsArray from "./LocationArray";

export default function Location(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Locations"); // visar location
  const dropdownRef = useRef(null);

  // Code for the dropdown list to close if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Code for the "Get my location option in the dropdown list"
  const handleGeolocation = async () => {
    const location = await LocationCuisine();
    props.setLocation(location);
    setSelectedLocation(location);
    setIsOpen(false);
  };

  // Code to open the dropdown list if clicked on
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  // Code to set and present the value if a cuisine is selected
  const handleChange = (location) => {
    props.setLocation(location.value);
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
            <li key="my-location" className="checkbox-item">
              <button
                className="btnRegion"
                type="button"
                onClick={handleGeolocation}
              >
                Use My Location
              </button>
            </li>
            {locationsArray.map((location) => (
              <li key={location.value} className="checkbox-item">
                <button
                  className="btnRegion"
                  type="button"
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
