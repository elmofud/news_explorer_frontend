import logo from "../../images/newsExplorer.svg";
import logoutIcon from "../../images/logout-icon.svg";
import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="News Explorer" />
      <nav className="header__nav">
        <a className="header__link header__link_active" href="#">
          Home
        </a>
        {isLoggedIn ? (
          <>
            <a className="header__link" href="#">
              Saved Articles
            </a>
            <button className="header__button header__button_logout">
              Elise
              <img
                className="header__logout-icon"
                src={logoutIcon}
                alt="Logout"
              />
            </button>
          </>
        ) : (
          <button className="header__button">Sign In</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
