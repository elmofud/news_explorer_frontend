import "./NewsCard.css";

const NewsCard = ({
  imageUrl,
  date,
  title,
  info,
  url,
  keyword,
  source,
  id,
}) => {
  const isBookmarked = false;
  const bookmarkButtonClassName = `news-card__bookmark-button ${isBookmarked ? "news-card__bookmark-button_active" : ""}`;

  //   const handleBookmark = () => {
  //     onCardBookmark({id: NewsCard._id, isBookmarked: isBookmarked});
  //   }
  return (
    <div className="news-card">
      <button className={bookmarkButtonClassName} type="button"></button>
      <img src={imageUrl} alt={title} className="news-card__image" />
      <div className="news-card__container">
        <p className="news-card__date">{date}</p>
        <h1 className="news-card__title">{title}</h1>
        <p className="news-card__info">{info}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
