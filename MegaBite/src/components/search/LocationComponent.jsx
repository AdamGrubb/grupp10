import React, { useState, useEffect } from 'react';

const LocationComponent = (props) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          props.setLocation({ latitude, longitude }); // Pass the coordinates to the parent component
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