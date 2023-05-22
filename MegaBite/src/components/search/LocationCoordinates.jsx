//  Function that will create and return an object with ->
//  coordinates based on the users current position
const GetCoordinates = async () => {
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
      reject("Your browser doesn't support geolocation API");
    }
  });
  const locations = await promises;
  return locations;
};
export default GetCoordinates;
