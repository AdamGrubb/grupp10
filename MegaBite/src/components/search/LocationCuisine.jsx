import getCuisineByCountry from "../CuisinesByLocation/CuisineFeature";
import { SearchLocation } from "../API/SearchLocation";
import GetCoordinates from "./LocationCoordinates";

/* FUNCTION IN THREE STEPS
step 1 - get the users coordinates
step 2 - get country by using the coodinates
step 3 - get result (cuisine) by using country into the cuisines filter */
export async function LocationCuisine() {
  const coordinates = await GetCoordinates();
  const country = await SearchLocation(coordinates);
  const result = getCuisineByCountry(country);

  return result;
}
