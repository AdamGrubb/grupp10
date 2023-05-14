// import React, { useState, useEffect } from 'react';

// const LocationComponent = (props) => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//         },
//         error => {
//           console.error('Error getting location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   const getLocationInfo = async () => {
//     if (location) {
//       try {
//         const response = await fetch(
//           `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.longitude},${location.latitude}.json?access_token=pk.eyJ1IjoiaHVuZHJhMCIsImEiOiJjbGhucXg2N3gxb3d5M3FudTdjYXhodXMwIn0.CoCcBmeZ7hOkSU9ujWVPNw`
//         );
//         const data = await response.json();
//         const placeName = data.features[0].place_name;
//         console.log('User location:', placeName);
//         // Do something with the location information
//       } catch (error) {
//         console.error('Error getting location information:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <button onClick={getLocationInfo}>Get Location</button>
//     </div>
//   );
// };

// export default LocationComponent;