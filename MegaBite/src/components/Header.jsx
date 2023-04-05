import logo from "../assets/logo1.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-headerColor">
      <div>
        <img src={logo} alt="MegaBiteLogo" className="h-24" />
      </div>
      <div>MegaBite</div>
      <div>Menu</div>
    </header>
  );
}
