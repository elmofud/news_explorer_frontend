import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      {/* Other components and content can be added here */}
    </div>
  );
}

export default App;
