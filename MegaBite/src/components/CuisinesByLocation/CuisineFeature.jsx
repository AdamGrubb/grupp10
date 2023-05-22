import cuisines from "./Cuisines";

// This function takes in country as a parameter and match it with a cuisine.
const getCuisineByCountry = (country) => {
  const cuisineObj = cuisines.find((cuisine) =>
    cuisine.countries.includes(country.country)
  );

  // This code returns the cuisine property of the cuisineObj if it exists.
  return cuisineObj ? cuisineObj.cuisine : "";
};

export default getCuisineByCountry;
