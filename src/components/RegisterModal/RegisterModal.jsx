import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({
    isOpen,
    onClose,
    buttonText,
    onLoginClick,
    onSignupSuccess,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Register form submitted fired:", {
            email,
            password,
            username,
        });
        onSignupSuccess({ email, password, username });
    };
    return (
        <ModalWithForm
            isOpen={isOpen}
            title="Sign up"
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText={buttonText}
            alternateButton={
                <button
                    type="button"
                    className="modal__alternate-button"
                    onClick={onLoginClick}
                >
                    or{" "}
                    <span className="modal__alternate-button-link">Log In</span>
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
                />
            </label>
            <label htmlFor="register-password" className="modal__label">
                Password{" "}
                <input
                    required
                    type="password"
                    className="modal__input"
                    id="register-password"
                    placeholder="Enter password"
                    name="password"
                />
            </label>
            <label htmlFor="register-username" className="modal__label">
                Username{" "}
                <input
                    required
                    type="text"
                    className="modal__input"
                    id="register-username"
                    placeholder="Enter your username"
                    name="username"
                />
            </label>
        </ModalWithForm>
    );
};

export default RegisterModal;
