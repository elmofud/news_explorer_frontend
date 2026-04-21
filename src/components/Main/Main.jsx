import About from "../About/About.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import "./Main.css";

const Main = ({ searchResults, isSearch }) => {
  return (
    <div className="main">
      {isSearch && (
        <section className="search-results">
          <h2 className="search-results__title">Search Results</h2>
          <NewsCardList articles={searchResults} />
          <button className="search-results__button" type="button">
            Show more
          </button>
        </section>
      )}
      <About />
    </div>
  );
};

export default Main;
