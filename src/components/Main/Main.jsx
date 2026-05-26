import { useState } from "react";
import About from "../About/About.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import "./Main.css";
import NothingFound from "../NothingFound/NothingFound.jsx";

const Main = ({
    searchResults,
    isSearch,
    isLoggedIn,
    onSaveArticle,
    isLoading,
}) => {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    const visibleArticles = searchResults.slice(0, visibleCount);

    return (
        <div className="main">
            {isSearch && searchResults.length > 0 && (
                <section className="search-results">
                    <h2 className="search-results__title">Search Results</h2>
                    <NewsCardList
                        articles={visibleArticles}
                        isSavedNews={false}
                        isLoggedIn={isLoggedIn}
                        onSaveArticle={onSaveArticle}
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
            {isSearch && !isLoading && searchResults.length === 0 && (
                <NothingFound />
            )}
            <About />
        </div>
    );
};

export default Main;
