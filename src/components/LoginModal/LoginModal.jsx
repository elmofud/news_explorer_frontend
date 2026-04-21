import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

const LoginModal = ({
  isOpen,
  onClose,
  onLogin,
  buttonText,
  onRegisterClick,
}) => {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      alternateButton={
        <button
          type="button"
          className="modal__alternate-button"
          onClick={onRegisterClick}
        >
          or Sign up
        </button>
      }
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          required
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          name="email"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          required
          type="password"
          className="modal__input"
          id="lgoin-password"
          placeholder="Enter password"
          name="password"
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
