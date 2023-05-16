import React, { useState } from "react";
import LocationComponent from "../search/LocationComponent";
import "./Footer.css";

export function Footer() {
  const [coordinates, setCoordinates] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSetLocation = (location) => {
    setCoordinates(location);
    setShowPopup(false);
  };

  const handleUseLocation = () => {
    setShowPopup(true);
  };

  return (
    <>
      <footer className="bg-footerColor footer">
        <div>
          <p className="FindUsAt">Find us at!</p>

          <div className="social-links">
            <p className="GitHub">
              <a
                href="https://github.com/AdamGrubb/grupp10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </p>
            <p className="LinkedIn">
              <a
                href="https://grupp10.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </p>
            <div className="office-logo">
              <a
                href="https://www.iths.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-building"></i> Office
              </a>
            </div>
          </div>
          <p className="joke">
            What do you call cheese that isn't yours? Nacho cheese!"
          </p>
        </div>
        <button onClick={handleUseLocation}>Use my location</button>
        {showPopup && <LocationComponent setLocation={handleSetLocation} />}
        {coordinates !== null && (
          <div>
            <h2>Coordinates:</h2>
            <p>Latitude: {coordinates.latitude}</p>
            <p>Longitude: {coordinates.longitude}</p>
          </div>
        )}
      </footer>
    </>
  );
}
