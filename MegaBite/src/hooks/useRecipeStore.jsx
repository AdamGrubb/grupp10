import { create } from "zustand";

//recipeCollection fyller man på via functionen addRecipes och är den array man använder för att hämta recepten i projektet.
const useRecipeStore = create((set) => ({
  recipeCollection: [
    {
      title: "Recipe not found",
      img: "",
      ingredients: [],
      description: [],
      time: 0,
      portions: 0,
      allergens: [],
    },
  ],

  //Denna funktion är tänkt att ta in en array av recept-objekt som den ersätter recipeCollection med. Så när API-anropet är gjort och man fått resultatet så stoppar man in resultaten i dennna.
  addRecipes: (recipes) => set((state) => ({ recipeCollection: [...recipes] })),

//fillPlaceholders kan man använda för att fylla recipeCollection med placeholder-recept. Kan användas som en "mock-databas" för att testa filtrering osv.
  fillPlaceholders: () =>
    set({
      recipeCollection: [
        {
          title: "Oatmeal porridge",
          img: "", //Länk till bild
          ingredients: [
            "havregryn",
            "vatten",
            "salt",
            "salt",
            "salt",
            "salt",
            "havregryn",
            "vatten",
            "salt",
            "salt",
            "salt",
            "havregryn",
            "vatten",
            "salt",
            "salt",
            "salt",
          ],
          description: [
            "Koka upp vatten och havregryn och rör om under tiden.",
            "Koka upp vatten och havregryn och rör om under tiden.",
            "Koka upp vatten och havregryn och rör om under tiden.",
            "Koka upp vatten och havregryn och rör om under tiden.",
          ],
          time: 12,
          portions: 4,
          allergens: ["egg", "vegan"],
        },
        {
          title: "Blodgröt",
          img: "", //Länk till bild
          ingredients: [
            "svinmålla",
            "nässlor",
            "skräppa",
            "ängssyra ",
            "eller vitmåra",
            "djurblod",
          ],
          description: [
            "Drag av fröna, rosta och mal dem.",
            "Mal dessutom hasselnötter till mjöl och blanda alltihop med färskt blod av vilket slag som helst till  en tjock smet.",
            "Ställ slutligen gröten på jäsning i några veckor innan den avnjuts",
          ],
          time: 12,
          portions: 4,
          allergens: ["vegan"],
        },
        {
          title: "Vegan lentil soup",
          img: "", //Länk till bild
          ingredients: [
            "lentils",
            "carrots",
            "onion",
            "garlic",
            "vegetable broth",
            "tomato paste",
            "cumin",
            "paprika",
            "salt",
            "pepper",
          ],
          description: [
            "Rinse lentils and set aside.",
            "Chop carrots, onion, and garlic.",
            "Heat a large pot over medium-high heat and add some oil.",
            "Add carrots, onion, and garlic and cook for 2-3 minutes.",
            "Add lentils, vegetable broth, tomato paste, cumin, paprika, salt, and pepper.",
            "Bring to a boil and then reduce heat and simmer for 30-40 minutes.",
            "Serve hot.",
          ],
          time: 45,
          portions: 6,
          allergens: ["vegan"],
        },

        {
          title: "Vegetarian pizza",
          img: "",
          ingredients: [
            "pizza dough",
            "tomato sauce",
            "mozzarella cheese",
            "red bell pepper",
            "green bell pepper",
            "red onion",
            "mushrooms",
            "olive oil",
            "garlic",
            "oregano",
            "salt",
            "pepper",
          ],
          description: [
            "Preheat oven to 450°F (230°C).",
            "Roll out pizza dough and place on a baking sheet.",
            "Spread tomato sauce over the dough, leaving a border around the edges.",
            "Top with mozzarella cheese, sliced bell peppers, sliced red onion, and sliced mushrooms.",
            "Drizzle with olive oil and sprinkle with minced garlic, oregano, salt, and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot.",
          ],
          time: 30,
          portions: 4,
          allergens: ["vegetarian", "glutenfri"],
        },

        {
          title: "Gluten-free banana bread",
          img: "",
          ingredients: [
            "ripe bananas",
            "eggs",
            "honey",
            "coconut oil",
            "almond flour",
            "oat flour",
            "baking powder",
            "cinnamon",
            "salt",
          ],
          description: [
            "Preheat oven to 350°F (180°C).",
            "In a large bowl, mash ripe bananas with a fork.",
            "Add eggs, honey, and melted coconut oil to the bowl and mix well.",
            "In a separate bowl, whisk together almond flour, oat flour, baking powder, cinnamon, and salt.",
            "Add the dry ingredients to the wet ingredients and mix until well combined.",
            "Pour the batter into a greased loaf pan.",
            "Bake in the preheated oven for 45-50 minutes or until a toothpick inserted into the center comes out clean.",
            "Let cool for 10 minutes before slicing and serving.",
          ],
          time: 60,
          portions: 8,
          allergens: ["glutenfri", "laktosfri"],
        },
      ],
    }),

}));

export default useRecipeStore;
