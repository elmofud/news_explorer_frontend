import emoji from "../../images/not-found-icon.svg";
import "./NothingFound.css";

const NothingFound = () => {
  return (
    <div className="nothing-found">
      <img src={emoji} alt="emoji" className="nothing-found__image" />

      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NothingFound;
