import { Link } from "react-router-dom";
import "./Search.css";
import magnGlass from "../../assets/magnGlass.png";

export default function Search() {
  return (
    <section className="flex justify-center h-24 m-1 bg-searchBarColor">
      <div className="flex searchBoxWrapperDiv">
        <input type="text" id="searchBox" placeholder="Search..." />
        <Link id="btnSearch" to="/searchresults">
          <img
            src={magnGlass}
            id="magnGlass"
            alt="Magnifying glass search button"
          />
          {/* <button className="">Search</button> */}
        </Link>
      </div>
    </section>
  );
}
