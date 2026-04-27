import NewsCardList from "../NewsCardList/NewsCardList.jsx";

import "./SavedNews.css";

const SavedNews = ({
  savedArticles = [],
  keywords = "",
  username = "User",
  onDelete,
}) => {
  return (
    <div className="saved-news">
      <section className="saved-news__head">
        <div className="saved-news__head-container">
          <p className="saved-news__section-title">Saved articles</p>
          <h2 className="saved-news__user-article">
            {username}, you have {savedArticles.length} saved articles
          </h2>
          <p className="saved-news__keywords">
            by keywords:{" "}
            <span className="saved-news__keywords saved-news__keywords_weight_bold">
              {keywords}
            </span>
          </p>
        </div>
      </section>
      <NewsCardList
        articles={savedArticles}
        isSavedNews={true}
        onDelete={onDelete}
      />
    </div>
  );
};

export default SavedNews;
