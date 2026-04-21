import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({
  isOpen,
  onClose,
  onRegister,
  buttonText,
  onLoginClick,
}) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Register"
      onClose={onClose}
      //   onSubmit={handleRegisterSubmit}
      buttonText={buttonText}
      alternateButton={
        <button
          type="button"
          className="modal__alternate-button"
          onClick={onLoginClick}
        >
          or Log In
        </button>
      }
    >
      <label htmlFor="register-email" className="modal__label">
        Email{" "}
        <input
          required
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Enter email"
          name="email"
          // value={values.email}
        />
      </label>
      <label htmlFor="resgister-password" className="modal__label">
        Password{" "}
        <input
          required
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Emter password"
          name="password"
        />
      </label>
      <label htmlFor="resgister-username" className="modal__label">
        Username{" "}
        <input
          required
          type="text"
          className="modal__input"
          id="resgister-username"
          placeholder="Username"
          name="username"
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
