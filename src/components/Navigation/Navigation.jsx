import logoutIcon from "../../images/logout-icon.svg";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
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
            Elise
            <img
              className="navigation__logout-icon"
              src={logoutIcon}
              alt="Logout"
            />
          </button>
        </>
      ) : (
        <button className="navigation__button">Sign In</button>
      )}
    </nav>
  );
};

export default Navigation;
