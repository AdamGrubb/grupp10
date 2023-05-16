import getCuisineByCountry from "../CuisinesByLocation/CuisineFeature";
import { SearchLocation } from "../API/SearchLocation";
import LocationComponent from "./LocationComponent";

export default function LocationCuisine() {
  console.log("jag är här inne");
  //coordinates = LocationComponent();
  //console.log(coordinates);

  const country = SearchLocation();
  console.log("nu är jag här");
  const result = getCuisineByCountry(country);
  console.log(result);

  return result;
}
