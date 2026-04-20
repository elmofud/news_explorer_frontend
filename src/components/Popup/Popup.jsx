import closeButton from "../../assets/closeButton.svg";
import "./Popup.css";

const Popup = ({ children, buttonText, onClose }) => {
  return (
    <div className="modal">
      <button className="modal__close-button" type="button" onClick={onClose}>
        <img
          src={closeButton}
          alt="close button"
          className="modal__close-button-image"
        />
      </button>
      <form className="modal__form">
        {children}
        <button className="modal__submit" type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Popup;
