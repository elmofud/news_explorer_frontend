import { useState } from "react";
import "./NewsCard.css";

const NewsCard = ({
    imageUrl,
    date,
    title,
    info,
    keyword,
    source,
    id,
    isSavedNews = false,
    onDelete,
    isLoggedIn,
    onSaveArticle,
}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const bookmarkButtonClassName = `news-card__bookmark-button ${isBookmarked ? "news-card__bookmark-button_active" : ""}`;

    const handleDelete = () => {
        if (onDelete) {
            onDelete(id);
        }
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        if (!isBookmarked && onSaveArticle) {
            onSaveArticle({ imageUrl, date, title, info, keyword, source });
        }
    };

    return (
        <li className="news-card">
            {isSavedNews && isLoggedIn && (
                <span className="news-card__keyword">{keyword}</span>
            )}
            {isSavedNews && isLoggedIn ? (
                <button
                    className="news-card__delete-button"
                    type="button"
                    onClick={handleDelete}
                    aria-label="Remove from saved"
                ></button>
            ) : (
                <button
                    className={bookmarkButtonClassName}
                    type="button"
                    onClick={handleBookmark}
                ></button>
            )}
            <img src={imageUrl} alt={title} className="news-card__image" />
            <div className="news-card__container">
                <p className="news-card__date">{date}</p>
                <h2 className="news-card__title">{title}</h2>
                <p className="news-card__info">{info}</p>
                <p className="news-card__source">{source}</p>
            </div>
        </li>
    );
};

export default NewsCard;
