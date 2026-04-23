import closeButton from "../../assets/closeButton.svg";
import "./SignupSuccessModal.css";

const SignupSuccessModal = ({ onClose, isOpen, onLoginClick }) => {
  return (
    <div className={`signup-success ${isOpen ? "signup-success--open" : ""}`}>
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
