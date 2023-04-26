import { create } from "zustand";

//recipeCollection is used to store the collection of recipes that you get from the API-call. You use the addRecipe-function with an array as a parameter to replace the collection with a new array.
const useRecipeStore = create((set) => ({
  recipeCollection: [],

//filteredRecipeCollection is used to store a filtered version of recipeCollection.
  filteredRecipeCollection: [],

  //You call on this function to store an array of recipe in recipeCollection. The parameter to the function is an array of recipes.
  addRecipes: (recipes) => set((state) => ({ recipeCollection: [...recipes] })),

  //You call on this function to store an array of recipe in filteredRecipeCollection. The parameter to the function is an array of recipes.
  addFilteredRecipes: (recipes) => set((state) => ({ filteredRecipeCollection: [...recipes] })),

  //This function has no parameters and is called to fill the recipeCollection with mock-result. It is to be used to test functions without having to call the API for data.
  fillPlaceholders: () =>
    set({
      recipeCollection: [
        {
          id: 1,
          title: "Gluten-Free Pasta",
          allergens: [
            { glutenFree: true },
            { lactose: false },
            { vegetarian: true },
            { vegan: true },
          ],
          cuisine: ["Italian", "European"],

          servings: 4,
          description: [
            "Cook pasta in boiling water for 8-10 minutes",
            "Drain pasta and mix in your favorite sauce",
          ],
          ingredients: [
            {
              id: 2001,
              aisle: "Pasta and Rice",
              image: "gluten-free-pasta.jpg",
              consistency: "SOLID",
              name: "gluten-free pasta",
              nameClean: "gluten-free pasta",
              original: "1 lb gluten-free pasta",
              originalName: "gluten-free pasta",
              amount: 1.0,
              unit: "lb",
              meta: ["gluten-free"],
              measures: {
                us: {
                  amount: 1.0,
                  unitShort: "lb",
                  unitLong: "pound",
                },
                metric: {
                  amount: 453.592,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 3001,
              aisle: "Canned and Jarred",
              image: "tomato-sauce.jpg",
              consistency: "LIQUID",
              name: "tomato sauce",
              nameClean: "tomato sauce",
              original: "2 cups tomato sauce",
              originalName: "tomato sauce",
              amount: 2.0,
              unit: "cups",
              meta: [],
              measures: {
                us: {
                  amount: 2.0,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 473.176,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 4001,
              aisle: "Produce",
              image: "garlic.png",
              consistency: "SOLID",
              name: "garlic",
              nameClean: "garlic",
              original: "3 cloves garlic, minced",
              originalName: "garlic, minced",
              amount: 3,
              unit: "cloves",
              meta: ["minced"],
              measures: {
                us: {
                  amount: 3,
                  unitShort: "cloves",
                  unitLong: "cloves",
                },
                metric: {
                  amount: 3,
                  unitShort: "cloves",
                  unitLong: "cloves",
                },
              },
            },
          ],
          mealType: ["lunch", "main course"],
          readyInMinutes: 60,
          img: "placeholder-website",
        },
        {
          id: 4,
          title: "Avocado Toast",
          allergens: [
            { glutenFree: false },
            { lactose: true },
            { vegetarian: true },
            { vegan: false },
          ],
          servings: 2,
          description: [
            "Toast bread",
            "Mash avocado",
            "Spread avocado on toast",
          ],
          cuisine: ["Mediterranean"],
          mealType: ["main course", "dinner"],
          readyInMinutes: 45,
          ingredients: [
            {
              id: 2001,
              aisle: "Produce",
              image: "avocado.jpg",
              consistency: "SOLID",
              name: "avocado",
              nameClean: "avocado",
              original: "1 avocado",
              originalName: "avocado",
              amount: 1,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 2002,
              aisle: "Bakery/Bread",
              image: "bread-white.jpg",
              consistency: "SOLID",
              name: "bread",
              nameClean: "bread",
              original: "2 slices of bread",
              originalName: "slices of bread",
              amount: 2,
              unit: "",
              meta: ["white"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 2,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
          ],
          img: "placeholder-website",
        },
        {
          id: 5,
          title: "Greek Salad",
          allergens: [
            { glutenFree: false },
            { lactose: true },
            { vegetarian: false },
            { vegan: true },
          ],
          servings: 2,
          description: ["Chop vegetables", "Combine ingredients in a bowl"],
          cuisine: [],
          mealType: ["side dish", "lunch"],
          readyInMinutes: 30,
          ingredients: [
            {
              id: 3001,
              aisle: "Produce",
              image: "cucumber.jpg",
              consistency: "SOLID",
              name: "cucumber",
              nameClean: "cucumber",
              original: "1 cucumber",
              originalName: "cucumber",
              amount: 1,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 3002,
              aisle: "Produce",
              image: "tomato.jpg",
              consistency: "SOLID",
              name: "tomato",
              nameClean: "tomato",
              original: "2 tomatoes",
              originalName: "tomatoes",
              amount: 2,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 2,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
          ],
          img: "placeholder-website",
        },
      ],
    }),
}));

export default useRecipeStore;
