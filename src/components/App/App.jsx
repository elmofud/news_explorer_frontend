import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import NewsCard from "../NewsCard/NewCard.jsx";
import Footer from "../Footer/Footer.jsx";
import Hero from "../Hero/Hero.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      {isLoading && <Preloader />}
      {!isLoading && results.length === 0 && <NothingFound />}
      <NewsCard />
      <Footer />
      {/* Other components and content can be added here */}
    </div>
  );
}

export default App;
