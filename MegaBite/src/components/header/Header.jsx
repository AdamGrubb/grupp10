import logo from "../../assets/logo1.png";
import megabite_logo from "../../assets/megabite_logo_test_white.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-headerColor">
      <div>
        <img src={logo} alt="MegaBiteLogo" className="h-24" />
      </div>
      <img src={megabite_logo} alt="MegaBite_Test_Logo" className="h-24" />
      {/* <div>MegaBite</div> */}
      <div>Menu</div>
    </header>
  );
}
