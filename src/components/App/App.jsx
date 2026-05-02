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
import SignupSuccessModal from "../SignupSuccessModal/SignupSuccessModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { getNewsArticles } from "../../utils/newsApi.js";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [activeModal, setActiveModal] = useState("");

    /* /*TODO Stage 1.2: revert these to defaults once News API is connected.
   results should be useState([])
   isSearch should be useState(false)  
   savedArticles should be useState([]) and populated from API */
    const [results, setResults] = useState(mockArticles);
    const [isSearch, setIsSearch] = useState(true);
    const [savedArticles, setSavedArticles] = useState(mockArticles);
    const [_isBookmarked, _setIsBookmarked] = useState(false);

    const [username, setUsername] = useState("");
    const [isActive, _setIsActive] = useState(false);

    const handleLoginClick = () => setActiveModal("login");
    const handleRegisterClick = () => setActiveModal("signup");

    const handleSignupSuccess = ({ username }) => {
        setUsername(username);
        setActiveModal("signup-success");
    };

    const handleCloseModal = () => setActiveModal("");
    const handleLogin = () => {
        setIsLoggedIn(true);
        setActiveModal("");
    };
    const handleSearch = async (keyword) => {
        setIsSearch(true);
        setIsLoading(true);
        try {
            const articles = await getNewsArticles(keyword);
            setResults(articles);
        } catch (error) {
            console.error("Error fetching news articles:", error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const handleDeleteArticle = (id) => {
        setSavedArticles((prevArticles) =>
            prevArticles.filter((article) => article.id !== id),
        );
    };

    return (
        <div className="app">
            <div className="app__content">
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
                                <Hero onSearch={handleSearch} />
                                <Main
                                    searchResults={results}
                                    isSearch={isSearch}
                                />
                                {!isSearch && results.length === 0 && (
                                    <NothingFound />
                                )}
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
                                onDelete={handleDeleteArticle}
                            />
                        }
                    />
                </Routes>
                {isLoading && <Preloader />}
                <Footer />
                <LoginModal
                    isOpen={activeModal === "login"}
                    onClose={handleCloseModal}
                    onRegisterClick={handleRegisterClick}
                    onLogin={handleLogin}
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
        </div>
    );
}

export default App;
