import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import avatar from "../../images/image-03.png";
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
      <section className="about-author">
        <img src={avatar} alt="avatar" />
        <h1 className="about-author__title">About the author</h1>
        <p className="about-author__description">
          This block describes the project author
        </p>
      </section>
    </div>
  );
};

export default Main;
