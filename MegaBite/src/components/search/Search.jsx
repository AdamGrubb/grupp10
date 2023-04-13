import { Link } from "react-router-dom";

export default function Search() {
  return (
    <section className="flex justify-center h-24 m-1 bg-searchBarColor">
      <div className="flex flex-col items-center">
        <h4 className="align-text-center">Welcome to MegaBite!</h4>
        <div className="">
          <input type="text" name="" id="" placeholder="Search..." />
          <Link to="/searchresults">
            <button className="rounded-r-lg text-black bg-btnColor">
              Search
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
