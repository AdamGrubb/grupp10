import React, { useEffect } from "react";

const LocationComponent = ({ setLocation }) => {
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            setLocation({ latitude: lat, longitude: long });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, [setLocation]);

  return null;
};

export default LocationComponent;
