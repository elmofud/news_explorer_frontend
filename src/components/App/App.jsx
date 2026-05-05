import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";
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
    const [results, setResults] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [savedArticles, setSavedArticles] = useState([]);
    const [_isBookmarked, _setIsBookmarked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [username, setUsername] = useState("");
    const [isActive, _setIsActive] = useState(false);

    const handleLoginClick = () => setActiveModal("login");
    const handleRegisterClick = () => setActiveModal("signup");

    const handleSignupSuccess = ({ email, password, username }) => {
        setIsSubmitting(true);
        auth.register({ email: email, password, username })
            .then((res) => {
                console.log("Registration successful:", res);
                setUsername(username);
                setActiveModal("signup-success");
            })
            .catch((err) => console.error("Registration failed:", err))
            .finally(() => setIsSubmitting(false));
    };

    const handleCloseModal = () => setActiveModal("");

    const handleLogin = ({ email, password }) => {
        setIsSubmitting(true);
        auth.authorize({ email, password })
            .then((data) => {
                localStorage.setItem("jwt", data.token);
                return auth.checkToken(data.token);
            })
            .then((res) => {
                setUsername(res.data.username);
                setIsLoggedIn(true);
                setActiveModal("");
            })
            .catch((err) => console.error(err))
            .finally(() => setIsSubmitting(false));
    };

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setUsername("");
        setSavedArticles([]);
        setResults([]);
        setIsSearch(false);
    };

    async function handleSearch(keyword) {
        setIsSearch(true);
        setIsLoading(true);
        try {
            const articles = await getNewsArticles(keyword);
            const articlesWithKeyword = articles.map((article) => ({
                ...article,
                keyword: keyword,
            }));
            setResults(articlesWithKeyword);
        } catch (error) {
            console.error("Error fetching news articles:", error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    }

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const handleSaveArticle = (article) => {
        const token = localStorage.getItem("jwt");
        api.saveArticle(article, token)
            .then((res) => {
                setSavedArticles((prev) => [res.data, ...prev]);
            })
            .catch((err) => console.error(err));
    };

    const handleDeleteArticle = (id) => {
        setSavedArticles((prevArticles) =>
            prevArticles.filter((article) => article._id !== id),
        );
    };

    const savedKeywords = [
        ...new Set(savedArticles.map((article) => article.keyword)),
    ]
        .filter(Boolean)
        .join(", ");

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) return;

        auth.checkToken(token)
            .then((res) => {
                setUsername(res.data.username);
                setIsLoggedIn(true);
            })
            .catch((err) => {
                console.error("Token validation failed:", err);
                localStorage.removeItem("jwt");
            });
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) return;
        api.getSavedArticles(token)
            .then((res) => {
                setSavedArticles(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch saved articles:", err);
            });
    }, [isLoggedIn]);

    return (
        <div className="app">
            <div className="app__content">
                <Header
                    isHomePage={isHomePage}
                    isLoggedIn={isLoggedIn}
                    onLoginClick={handleLoginClick}
                    username={username}
                    isActive={isActive}
                    onLogout={handleLogout}
                    activeModal={activeModal}
                    onCloseModal={handleCloseModal}
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
                                    isLoggedIn={isLoggedIn}
                                    onSaveArticle={handleSaveArticle}
                                />
                                {isSearch &&
                                    isLoading &&
                                    results.length === 0 && <NothingFound />}
                            </>
                        }
                    />
                    <Route
                        path="/saved-news"
                        element={
                            <SavedNews
                                savedArticles={savedArticles}
                                username={username}
                                keywords={savedKeywords}
                                onDelete={handleDeleteArticle}
                                isLoggedIn={isLoggedIn}
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
                    isSubmitting={isSubmitting}
                />
                <RegisterModal
                    isOpen={activeModal === "signup"}
                    onClose={handleCloseModal}
                    onLoginClick={handleLoginClick}
                    onSignupSuccess={handleSignupSuccess}
                    buttonText="Sign up"
                    isSubmitting={isSubmitting}
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
