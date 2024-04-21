import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer-logo"></a>

          <Link to="/uslovi-koriscenja" className="uslovi-link">
            USLOVI KORIŠĆENJA | PRAVILA PRIVATNOSTI
          </Link>

        <p className="copyright">© Copyright 2023 DECOR VISION</p>
    
    </footer>
  );
};

export default Footer;
