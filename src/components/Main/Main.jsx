import { useState } from "react";
import About from "../About/About.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import "./Main.css";

const Main = ({ searchResults, isSearch, isLoggedIn }) => {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    const visibleArticles = searchResults.slice(0, visibleCount);

    return (
        <div className="main">
            {isSearch && (
                <section className="search-results">
                    <h2 className="search-results__title">Search Results</h2>
                    <NewsCardList
                        articles={visibleArticles}
                        isSavedNews={false}
                        isLoggedIn={isLoggedIn}
                    />
                    {visibleCount < searchResults.length && (
                        <button
                            className="search-results__button"
                            type="button"
                            onClick={handleShowMore}
                        >
                            Show more
                        </button>
                    )}
                </section>
            )}
            <About />
        </div>
    );
};

export default Main;
