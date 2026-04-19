import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <a className="footer__link" href="#">
            HOME
          </a>
          <a className="footer__link" href="#">
            Triple Ten
          </a>
        </div>
        <div className="footer__icons">
          <a className="footer__icon" href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a className="footer__icon" href="#">
            <img src={github} alt="github" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
