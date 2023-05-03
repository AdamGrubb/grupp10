export default function FilterButton(props) {
  return (
    <>
      <div
        className="absolute top-full left-0 right-0 px-4 py-2 border rounded shadow"
        style={{ backgroundColor: "gray", zIndex: 1 }}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            name="breakfast"
            checked={props.filters.breakfast}
            onChange={(e) => {
              props.setFilters({ ...props.filters, breakfast: e.target.checked }
                );
            }}
          />
          <label htmlFor="breakfast" className="ml-2">
            Breakfast
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="lunch"
            checked={props.filters.lunch}
            onChange={(e) => {
              props.setFilters({ ...props.filters, lunch: e.target.checked });
            }}
          />
          <label htmlFor="lunch" className="ml-2">
            Lunch
          </label>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="dinner"
            checked={props.filters.dinner}
            onChange={(e) => {
              props.setFilters({ ...props.filters, dinner: e.target.checked });
            }}
          />
          <label htmlFor="dinner" className="ml-2">
            Dinner
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="glutenFree"
            checked={props.filters.glutenFree}
            onChange={(e) => {
              props.setFilters({ ...props.filters, glutenFree: e.target.checked });
            }}
          />
          <label htmlFor="gluten-free" className="ml-2">
            Gluten-free
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="dairyFree"
            checked={props.filters.dairyFree}
            onChange={(e) => {
              props.setFilters({ ...props.filters, dairyFree: e.target.checked });
            }}
          />
          <label htmlFor="dairy-free" className="ml-2">
            Dairy-free
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="vegan"
            checked={props.filters.vegan}
            onChange={(e) => {
              props.setFilters({ ...props.filters, vegan: e.target.checked });
            }}
          />
          <label htmlFor="vegan" className="ml-2">
            Vegan
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="vegetarian"
            checked={props.filters.vegetarian}
            onChange={(e) => {
              props.setFilters({ ...props.filters, vegetarian: e.target.checked });
            }}
          />
          <label htmlFor="vegetarian" className="ml-2">
            Vegetarian
          </label>
        </div>
      </div>
    </>
  );
}
