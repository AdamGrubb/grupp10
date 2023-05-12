export async function SearchLocation() {
    const apikey = "005ff50ab67648419887f11cca86bfe8";
  
//undefined koordinater: [{Latitude: -15.618611}, {Longitude: -9.868314}] 
//koordinater: [{Latitude: 55.4993}, {Longitude: 9.7307}]
const coordinateIncomingParams = [{Latitude: -15.618611}, {Longitude: -9.868314}];
const latitude = coordinateIncomingParams[0].Latitude;
const longitude = coordinateIncomingParams[1].Longitude;
const coordinateParams = latitude + "+" + longitude;
//console.log(coordinateParams);

    //https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YOUR-API-KEY
    const baseUrl = "https://api.opencagedata.com/geocode/v1/json?";
  
    const searchParams = new URLSearchParams();
    searchParams.append("q", coordinateParams);
    searchParams.append("key", apikey);
  
    try {
      const response = await fetch(`${baseUrl}${searchParams}`);
      const apiResults = await response.json();
      const country = apiResults.results[0].components.country;
      const continent = apiResults.results[0].components.continent;
      
      if (typeof country === "undefined" || typeof continent === "undefined"){
        return {country:"", continent:""};
      }

      const geoLocation = {country, continent};

      return geoLocation;

    } catch (error) {
      console.error(error);
      return {};
    }
  }
  