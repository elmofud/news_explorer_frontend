import logo from "../../images/newsExplorer.svg";
import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="News Explorer" />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
