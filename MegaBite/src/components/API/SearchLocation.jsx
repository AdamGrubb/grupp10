export async function SearchLocation(coordinateIncomingParams) {
    const apikey = "005ff50ab67648419887f11cca86bfe";
    //8
  
//undefined koordinater: [{Latitude: -15.618611}, {Longitude: -9.868314}] 
//koordinater: [{Latitude: 55.4993}, {Longitude: 9.7307}]
//const coordinateIncomingParams = [{Latitude: 55.4993}, {Longitude: 9.7307}];
const latitude = coordinateIncomingParams[0].Latitude;
const longitude = coordinateIncomingParams[1].Longitude;
const coordinateParams = latitude + "+" + longitude;

    //https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YOUR-API-KEY
    const baseUrl = "https://api.opencagedata.com/geocode/v1/json?";
  
    const searchParams = new URLSearchParams();
    searchParams.append("q", coordinateParams);
    searchParams.append("key", apikey);
  
    try {
      const response = await fetch(`${baseUrl}${searchParams}`);
      if (!response.ok) {
        alert(`HTTP error! status: ${response.status} Check console for response message.`);
      }
      const apiResults = await response.json();
      const country = apiResults.results[0].components.country;
      const continent = apiResults.results[0].components.continent;
      
      if (typeof country === "undefined" || typeof continent === "undefined"){
        return {country:"", continent:""};
      }

      const geoLocation = {country, continent};
    
      return geoLocation;

    } catch(error)
     {
      console.log(error + `
      400	Invalid request (bad request; a required parameter is missing; invalid coordinates; invalid version; invalid format)
      401	Unable to authenticate - missing, invalid, or unknown API key
      402	Valid request but quota exceeded (payment required)
      403	Forbidden (API key disabled or IP address rejected)
      404	Invalid API endpoint
      405	Method not allowed (non-GET request)
      408	Timeout; you can try again
      410	Request too long
      426	Upgrade required (unsupported TLS)
      429	Too many requests (too quickly, rate limiting)
      503	Internal server error`)
    }
  }
  