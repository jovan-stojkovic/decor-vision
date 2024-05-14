import "../Stilovi/Komponente.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <Link
        to="/"
        className="footer-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src="/slike/logos/decor_vision.svg" alt="DECOR VISION" />
      </Link>
      <Link
        to="/uslovi-koriscenja"
        className="uslovi-link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        USLOVI KORIŠĆENJA | PRAVILA PRIVATNOSTI
      </Link>
      <p className="copyright">© Copyright 2023 DECOR VISION</p>
    </footer>
  );
};

export default Footer;
