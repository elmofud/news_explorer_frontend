import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import "./SavedNews.css";

const SavedNews = ({ savedArticles, keywords, username, onDelete }) => {
  return (
    <div className="saved-news">
      <section className="saved-news__head">
        <p className="saved-news__section-title">Saved articles</p>
        <h2 className="saved-news__user-article-count">
          {username}, you have {savedArticles.length} saved articles
        </h2>
        <p className="saved-news__keywords">by keywords: {keywords}</p>
      </section>
      <NewsCardList articles={savedArticles} />
    </div>
  );
};

export default SavedNews;
