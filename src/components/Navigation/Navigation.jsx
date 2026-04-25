import logoutIcon from "../../images/logout-icon.svg";
import logoutBlackIcon from "../../images/logoutBlack-icon.svg";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({
  isHomePage,
  isLoggedIn,
  username,
  onLoginClick,
  isActive,
}) => {
  return (
    <nav
      className={`navigation${isHomePage ? " navigation_theme_light" : " navigation_theme_dark"} `}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `navigation__link${isActive ? " navigation__link_active" : ""}`
        }
      >
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              `navigation__link${isActive ? " navigation__link_active" : ""}`
            }
          >
            Saved Articles
          </NavLink>
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
        </>
      ) : (
        <button className="navigation__button" onClick={onLoginClick}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navigation;
