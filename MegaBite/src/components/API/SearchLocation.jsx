export async function SearchLocation(coordinateIncomingParams) {
  const apikey = "005ff50ab67648419887f11cca86bfe8";

  const latitude = coordinateIncomingParams.latitude;
  const longitude = coordinateIncomingParams.longitude;
  const coordinateParams = latitude + "+" + longitude;

  //Requested format https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YOUR-API-KEY
  const baseUrl = "https://api.opencagedata.com/geocode/v1/json?";

  const lang = "en";

  //Append coordinates and key to base.
  const searchParams = new URLSearchParams();
  searchParams.append("q", coordinateParams);
  searchParams.append("key", apikey);
  searchParams.append("language", lang);
  try {
    const response = await fetch(`${baseUrl}${searchParams}`);

    //Check for problems with call and return error code.
    if (!response.ok) {
      alert(
        `HTTP error! status: ${response.status} Check console for response message.`
      );
    }

    const apiResults = await response.json();
    const country = apiResults.results[0].components.country;
    const continent = apiResults.results[0].components.continent;

    //If country or continent are undefined empty strings should be returned in same format as a correct result.
    if (typeof country === "undefined" || typeof continent === "undefined") {
      return { country: "", continent: "" };
    }

    const geoLocation = { country, continent };

    return geoLocation;
  } catch (error) {
    console.log(
      error +
        `
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
      503	Internal server error`
    );
  }
}
