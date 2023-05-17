const LocationComponent = async () => {
  const promises = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          resolve({ latitude: lat, longitude: long });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject("Error getting location:");
        }
      );
    } else {
      reject("your browser doesn't support geolocation API");
    }
  });
  const locations = await promises;
  console.log(locations);
  return locations;
};
export default LocationComponent;
