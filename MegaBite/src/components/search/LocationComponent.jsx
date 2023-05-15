import React, { useState, useEffect } from 'react';

const LocationComponent = (props) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          props.setLocation({ latitude, longitude }); // Skicka koordinaterna till överordnade komponenten
        },
        error => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [props]);

  return null;
};

export default LocationComponent;