import { useEffect } from "react";
import closeButton from "../../images/closeButton.svg";
import "./ModalWithForm.css";

const ModalWithForm = ({
    children,
    buttonText,
    onClose,
    onSubmit,
    alternateButton,
    isSubmitting,
    title,
    isOpen,
}) => {
    const handleOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscapeKey = (evt) => {
            if (evt.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey);
        }
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={`modal ${isOpen ? "modal--open" : ""}`}
            onClick={handleOverlayClick}
        >
            <div className="modal__container">
                <button
                    className="modal__close-button"
                    type="button"
                    onClick={onClose}
                >
                    <img
                        src={closeButton}
                        alt="close button"
                        className="modal__close-button-image"
                    />
                </button>
                <h2 className="modal__title">{title}</h2>
                <form className="modal__form" onSubmit={onSubmit}>
                    {children}
                    <button
                        className="modal__submit"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {buttonText}
                    </button>
                    {alternateButton}
                </form>
            </div>
        </div>
    );
};

export default ModalWithForm;
