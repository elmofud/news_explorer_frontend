import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NewsCard from "./components/NewsCard/NewCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <NewsCard />
      <Footer />
      {/* Other components and content can be added here */}
    </div>
  );
}

export default App;
