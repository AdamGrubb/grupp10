import getCuisineByCountry from "../CuisinesByLocation/CuisineFeature";
import { SearchLocation } from "../API/SearchLocation";
import LocationComponent from "./LocationComponent";

export async function LocationCuisine() {
  console.log("jag är här inne");
  const coordinates = await LocationComponent();
  console.log(coordinates);

  const country = await SearchLocation(coordinates);
  console.log(country);
  const result = getCuisineByCountry(country);
  console.log(result);

  return result;
}
