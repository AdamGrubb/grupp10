import getCuisineByCountry from "../CuisinesByLocation/CuisineFeature";
import { SearchLocation } from "../API/SearchLocation";
import LocationComponent from "./LocationComponent";

export async function LocationCuisine() {
  const coordinates = await LocationComponent();

  const country = await SearchLocation(coordinates);
  const result = getCuisineByCountry(country);

  return result;
}
