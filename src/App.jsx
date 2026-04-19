import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      {/* Other components and content can be added here */}
    </div>
  );
}

export default App;
