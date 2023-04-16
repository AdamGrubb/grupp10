import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import "../../index.css";
import "./Header.css";

export function Header() {
  return (
    <>
      <header className="header h-24 bg-headerColor">
        <Link>
          <img src={logo} className="header-logo" alt="MegaBite logo" />
        </Link>
        <div className="header-title">
          <Link to="/">
            <h4 className="header-upper-font">MegaBite</h4>
            <h4 className="header-lower-font">One bite at a time</h4>
          </Link>
        </div>
      </header>
    </>
  );
}
