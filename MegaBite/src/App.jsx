import "./App.css";
import Header from "./components/header/Header";
import SiteContent from "./components/siteContent/SiteContent";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <Header />
      </div>
      <div className="grow m-1">
        <SiteContent />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;
