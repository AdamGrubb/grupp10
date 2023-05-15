import cuisines from "./Cuisines";

const getCuisineByCountry = (country) => {
  console.log(country);
  const cuisineObj = cuisines.find((cuisine) =>
    cuisine.countries.includes(country.Land)
  );

  return cuisineObj ? cuisineObj.cuisine : "";
};

export default getCuisineByCountry;
