import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import SiteContent from "./components/siteContent/SiteContent";
import SearchResults from "./components/searchResults/SearchResults";
import RecipePage from "./components/recipePage/RecipePage";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={SiteContent} />
        <Route path="/searchresults" Component={SearchResults} />
        <Route path="/recipepage" Component={RecipePage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
