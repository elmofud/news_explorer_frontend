import { Link } from "react-router-dom";
import logo from "../../images/newsExplorer.svg";
import logoBlack from "../../images/newsExplorerBlack.svg";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./Header.css";

function Header({
    activeModal,
    onLogout,
    isHomePage,
    username,
    isLoggedIn,
    onLoginClick,
    onCloseModal,
}) {
    return (
        <header
            className={`header${isHomePage ? " header_theme_light" : " header_theme_dark"}`}
        >
            <Link to="/" className="header__logo-link">
                <img
                    className="header__logo"
                    src={isHomePage ? logo : logoBlack}
                    alt="News Explorer"
                />
            </Link>
            <Navigation
                isHomePage={isHomePage}
                isLoggedIn={isLoggedIn}
                onLoginClick={onLoginClick}
                username={username}
                onLogout={onLogout}
                activeModal={activeModal}
                onCloseModal={onCloseModal}
            />
        </header>
    );
}

export default Header;
