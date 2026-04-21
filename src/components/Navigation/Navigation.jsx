import logoutIcon from "../../images/logout-icon.svg";
import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
  return (
    <nav className="navigation">
      <a className="navigation__link navigation__link_active" href="#">
        Home
      </a>
      {isLoggedIn ? (
        <>
          <a className="navigation__link" href="#">
            Saved Articles
          </a>
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
