import logo from "../../assets/logo1.png";
import megabite_logo from "../../assets/megabite_logo_test_white.png";
import "./Header.css"

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-headerColor">
      <div>
        <img src={logo} alt="MegaBiteLogo" className="h-24" />
      </div>
      <img className= "megabite_logo" src={megabite_logo} alt="MegaBite_Test_Logo"/>
      {/* <div>MegaBite</div> */}
      <div>Menu</div>
    </header>
  );
}
