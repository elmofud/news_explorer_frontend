import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout-icon.svg";
import logoutBlackIcon from "../../images/logoutBlack-icon.svg";
import "./Navigation.css";

const Navigation = ({ isHomePage, isLoggedIn, username, onLoginClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
    const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <nav
            className={`navigation${isHomePage ? " navigation_theme_light" : " navigation_theme_dark"} `}
        >
            <div className="navigation__desktop">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `navigation__link${isActive ? " navigation__link_active" : ""}`
                    }
                >
                    Home
                </NavLink>

                {isLoggedIn && (
                    <NavLink
                        to="/saved-news"
                        className={({ isActive }) =>
                            `navigation__link${isActive ? " navigation__link_active" : ""}`
                        }
                    >
                        Saved Articles
                    </NavLink>
                )}
                {isLoggedIn ? (
                    <button
                        className={`navigation__button navigation__button_logout${isHomePage ? " navigation__button_light" : " navigation__button_dark"}`}
                    >
                        {username}
                        <img
                            className="navigation__logout-icon"
                            src={isHomePage ? logoutIcon : logoutBlackIcon}
                            alt="Logout"
                        />
                    </button>
                ) : (
                    <button
                        className="navigation__button"
                        onClick={onLoginClick}
                    >
                        Sign In
                    </button>
                )}
            </div>
            <button
                className="navigation__hamburger"
                onClick={handleMenuToggle}
            >
                <span className="navigation__hamburger-line"></span>
                <span className="navigation__hamburger-line"></span>
                <span className="navigation__hamburger-line"></span>
            </button>
            {isMenuOpen && (
                <div className="navigation__mobile-menu">
                    <NavLink
                        to="/"
                        className="navigation__mobile-link"
                        onClick={handleLinkClick}
                    >
                        Home
                    </NavLink>
                    {isLoggedIn && (
                        <NavLink
                            to="/saved-news"
                            className="navigation__mobile-link"
                            onClick={handleLinkClick}
                        >
                            Saved Articles
                        </NavLink>
                    )}
                    {isLoggedIn ? (
                        <button
                            className={`navigation__button navigation__button_logout-icon${isHomePage ? " navigation__button_light" : " navigation__button_dark"}`}
                        >
                            {username}
                            <img
                                className="navigation__logout-icon"
                                src={isHomePage ? logoutIcon : logoutBlackIcon}
                                alt="Logout"
                            />
                        </button>
                    ) : (
                        <button
                            className="navigation__button navigation__mobile-button"
                            onClick={() => {
                                onLoginClick();
                                handleLinkClick();
                            }}
                        >
                            Sign In
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navigation;
