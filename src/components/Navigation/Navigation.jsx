import logoutIcon from "../../images/logout-icon.svg";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn, onLoginClick }) => {
  return (
    <nav className="navigation">
      <Link className="navigation__link navigation__link_active" to="/">
        Home
      </Link>
      {isLoggedIn ? (
        <>
          <Link className="navigation__link" to="/saved-news">
            Saved Articles
          </Link>
          <button className="navigation__button navigation__button_logout">
            Elis
            <img
              className="navigation__logout-icon"
              src={logoutIcon}
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
