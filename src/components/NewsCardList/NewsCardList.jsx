import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewsCardList.css";

const NewsCardList = ({ articles = [], isSavedNews, onDelete, isLoggedIn }) => {
    return (
        <ul className="news-card-list">
            {articles.map((article) => (
                <NewsCard
                    key={article.id}
                    id={article.id}
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
                />
            ))}
        </ul>
    );
};

export default NewsCardList;
