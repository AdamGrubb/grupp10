import cuisines from "./Cuisines";

const getCuisineByCountry = (country) => {
  console.log(country.country);
  const cuisineObj = cuisines.find((cuisine) =>
    cuisine.countries.includes(country.country)
  );

  return cuisineObj ? cuisineObj.cuisine : "";
};

export default getCuisineByCountry;
