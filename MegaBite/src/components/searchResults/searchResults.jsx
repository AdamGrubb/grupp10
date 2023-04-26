import RecipeCard from "../recipeCard/RecipeCard";
import arrow from "../../assets/arrow.png";
import "./searchResults.css";
import { Link } from "react-router-dom";

export default function SearchResults() {
  //Den här ska bytas ut om en array av recept som hämtar från store.
  const recipeFromStore = [
    {
      id: 1,
      title: "Gluten-Free Pasta",
      allergens: [
        { glutenFree: true },
        { lactose: false },
        { vegetarian: true },
        { vegan: true },
      ],
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
      img: "https://foodanddrink.scotsman.com/wp-content/uploads/2016/09/Frontpage-page-001.jpg",
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
      img: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-7.jpg",
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
      img: "https://cdn0.wideopenpets.com/wp-content/uploads/2017/09/Buff_Orpington_chicken_UK.jpg",
    },
  ]

  //Här ska jag ändra så att den tar emot en array av recept istället. Placeholdern är antal recept istället.
  const displayRecipeCards = (recipes) => {
    let RecipeCards = [];
    console.log(recipes);
    for (let x = 0; x < recipes.length; x++) {
      RecipeCards.push(
        <Link to="/searchresults/recipepage" state={recipes[x]} >
          <RecipeCard title={recipes[x].title} img={recipes[x].img}/>
        </Link>
      );
    }
    return RecipeCards;
  };

  return (
    <div>
    <section className="width">
      <nav className="flex flex-row flex-wrap justify-left ">
        {displayRecipeCards(recipeFromStore)}
      </nav>
    </section>

    </div>


  );
}
