import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewsCardList.css";

const NewsCardList = ({
    articles = [],
    isSavedNews,
    onDelete,
    isLoggedIn,
    onSaveArticle,
}) => {
    return (
        <ul className="news-card-list">
            {articles.map((article) => (
                <NewsCard
                    key={article._id || article.id}
                    _id={article._id}
                    title={article.title}
                    imageUrl={article.imageUrl}
                    date={article.date}
                    info={article.info}
                    url={article.url}
                    keyword={article.keyword}
                    source={article.source}
                    onDelete={onDelete}
                    isSavedNews={isSavedNews}
                    isLoggedIn={isLoggedIn}
                    onSaveArticle={onSaveArticle}
                />
            ))}
        </ul>
    );
};

export default NewsCardList;
