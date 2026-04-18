import logo from "../../images/newsExplorer.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="News Explorer" />
      <nav className="header__nav">
        <a className="header__link header__link_active" href="#">
          Home
        </a>
        <button className="header__button">Sign In</button>
      </nav>
    </header>
  );
}

export default Header;
