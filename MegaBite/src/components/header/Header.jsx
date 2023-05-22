import logo from "../../assets/logo22.png";
import { Link } from "react-router-dom";
import "./Header.css";
import useRecipeStore from "../../hooks/useRecipeStore";

export function Header() {
  const clearRecipes = useRecipeStore((state) => state.clearRecipes);

  return (
    <>
      <header className="header h-24 bg-headerColor" onClick={clearRecipes}>
        <Link to="/">
          <img src={logo} className="header-logo" alt="MegaBite logo" />
        </Link>
        <Link className="header-title" to="/">
          <div>
            <h4 className="header-upper-font">MegaBite</h4>
            <h4 className="header-lower-font">One bite at a time...</h4>
          </div>
        </Link>
      </header>
    </>
  );
}
