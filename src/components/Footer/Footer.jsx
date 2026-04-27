import { Link } from "react-router-dom";
import linkedin from "../../images/linkedin-icon.svg";
import github from "../../images/github-icon.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <Link className="footer__link" to="/">
            HOME
          </Link>
          <a className="footer__link" href="#">
            Triple Ten
          </a>
          {/* className="footer__link"
  href="https://tripleten.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Triple Ten
</a> */}
        </div>
        <div className="footer__icons">
          <a className="footer__icon" href="#">
            <img src={linkedin} alt="linkedin" className="footer__icon-image" />
          </a>
          <a className="footer__icon" href="#">
            <img src={github} alt="github" className="footer__icon-image" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
