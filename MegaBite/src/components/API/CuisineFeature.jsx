import React from "react";
import cuisines from "./Cuisines";

const getCuisineByCountry = (country) => {
  const cuisineObj = cuisines.find((cuisine) =>
    cuisine.countries.includes(country)
  );
  return cuisineObj ? cuisineObj.cuisine : "";
};

const CuisineFeature = ({ position }) => {
  let country = "Jamaica";
  const userCountry = country; //position[0]?.Land;
  const userCuisine = getCuisineByCountry(userCountry);

  console.log(userCuisine);
  return <>{userCuisine}</>;
};

export default CuisineFeature;
