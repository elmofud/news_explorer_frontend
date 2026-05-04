import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

const LoginModal = ({
    onLogin,
    isOpen,
    onClose,
    buttonText,
    onRegisterClick,
    isSubmitting,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin({ email, password });
    };

    return (
        <ModalWithForm
            title="Sign in"
            buttonText={buttonText}
            isOpen={isOpen}
            onClose={onClose}
            onLogin={onLogin}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
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
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                />
            </label>
            <label htmlFor="login-password" className="modal__label">
                Password{" "}
                <input
                    required
                    type="password"
                    className="modal__input"
                    id="login-password"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                />
            </label>
        </ModalWithForm>
    );
};

export default LoginModal;
