import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Hero from "../Hero/Hero.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Main from "../Main/Main.jsx";
import mockArticles from "../../utils/mockData.js";
import NothingFound from "../NothingFound/NothingFound.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SignupSuccessModal from "../SignupSuccessModal/SignupSucessModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  /* /*TODO Stage 1.2: revert these to defaults once News API is connected.
   results should be useState([])
   isSearch should be useState(false)  
   savedArticles should be useState([]) and populated from API */
  const [results, setResults] = useState(mockArticles);
  const [isSearch, setIsSearch] = useState(true);
  const [savedArticles, setSavedArticles] = useState(mockArticles);

  const [username, setUsername] = useState("Elis");
  const [isActive, setIsActive] = useState(false);

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("signup");
  const handleSignupSuccess = () => setActiveModal("signup-success");
  const handleCloseModal = () => setActiveModal("");

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <Header
        isHomePage={isHomePage}
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        username={username}
        isActive={isActive}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main searchResults={results} isSearch={isSearch} />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              username={username}
              keywords="Nature, Yellowstone"
            />
          }
        />
      </Routes>
      {isLoading && <Preloader />}
      {!isLoading && isSearch && results.length === 0 && <NothingFound />}
      <Footer />
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onRegisterClick={handleRegisterClick}
        buttonText="Sign in"
      />
      <RegisterModal
        isOpen={activeModal === "signup"}
        onClose={handleCloseModal}
        onLoginClick={handleLoginClick}
        onSignupSuccess={handleSignupSuccess}
        buttonText="Sign up"
      />
      <SignupSuccessModal
        isOpen={activeModal === "signup-success"}
        onClose={handleCloseModal}
        onLoginClick={handleLoginClick}
        buttonText="Sign in"
      />
    </div>
  );
}

export default App;
