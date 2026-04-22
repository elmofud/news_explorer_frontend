import closeButton from "../../assets/closeButton.svg";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  onClose,
  onSubmit,
  alternateButton,
  title,
  isOpen,
}) => {
  return (
    <div className={`modal ${isOpen ? "modal--open" : ""}`}>
      <button className="modal__close-button" type="button" onClick={onClose}>
        <img
          src={closeButton}
          alt="close button"
          className="modal__close-button-image"
        />
      </button>
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
        <button className="modal__submit" type="submit">
          {buttonText}
        </button>
        {alternateButton}
      </form>
    </div>
  );
};

export default ModalWithForm;
