import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import "../../index.css";

export function Header() {
  return (
    <>
      <header className="flex header justify-between items-center bg-headerColor">
        <Link to="/">
          <div>
            <img src={logo} alt="MegaBiteLogo" className="h-24" />
          </div>
        </Link>
        <Link to="/">
          <div>MegaBite</div>
        </Link>

        <div>Menu</div>
      </header>
    </>
  );
}
