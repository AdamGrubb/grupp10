export default function SetAmount(servings, ingredients) {
  if (servings == 1) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount * 4
    );
    return ingredients;
  }

  if (servings == 2) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount * 2
    );
    return ingredients;
  }
  if (servings == 3) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount * 1.334
    );
    return ingredients;
  }
  if (servings == 4) {
    return ingredients;
  }
  if (servings == 5) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount % 1.25
    );
    return ingredients;
  }
  if (servings == 6) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount % 1.5
    );
    return ingredients;
  }
  if (servings == 7) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount % 1.75
    );
    return ingredients;
  }
  if (servings == 8) {
    ingredients.map(
      (item) => item.measures.us.amount === item.measures.us.amount % 2
    );
    return ingredients;
  }
}
