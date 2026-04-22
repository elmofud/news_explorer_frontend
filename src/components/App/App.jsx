import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Hero from "../Hero/Hero.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SignupSuccessModal from "../SignupSuccessModal/SignupSucessModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const handleSignupSuccess = () => setActiveModal("signup-success");
  const handleCloseModal = () => setActiveModal("");

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      {isLoading && <Preloader />}
      {!isLoading && results.length === 0 && <NothingFound />}
      <Footer />
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onRegisterClick={handleRegisterClick}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
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
