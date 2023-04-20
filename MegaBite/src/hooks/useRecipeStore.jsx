import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipeCollection: [],
  addRecipes: (recipes) => set((state) => ({ recipeCollection: [...recipes] })),
  fillPlaceholders: () =>
    set({
      recipeCollection: [
        {
          title: "Oatmeal porridge",
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
      ],
    }),
}));

export default useRecipeStore
