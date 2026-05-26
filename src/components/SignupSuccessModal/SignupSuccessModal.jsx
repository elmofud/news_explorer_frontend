import { useEffect } from "react";
import closeButton from "../../images/closeButton.svg";
import "./SignupSuccessModal.css";

const SignupSuccessModal = ({ onClose, isOpen, onLoginClick }) => {
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
            onClick={handleOverlayClick}
            className={`signup-success${isOpen ? " signup-success--open" : ""}`}
        >
            <div className="signup-success__container">
                <button
                    type="button"
                    className="signup-success__close-button"
                    onClick={onClose}
                >
                    <img
                        src={closeButton}
                        alt="close white button"
                        className="signup-success__close-button-image"
                    />
                </button>
                <h2 className="signup-success__title">
                    Registration successfully completed!
                </h2>
                <button
                    type="button"
                    className="signup-success__button"
                    onClick={onLoginClick}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default SignupSuccessModal;
