import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h1>D</h1>
        </div>
        <div className="footer-links">
          <Link>USLOVI KORIŠĆENJA</Link>
          <span>|</span>
          <Link>PRAVILA PRIVATNOSTI</Link>
        </div>
        <p className="copyright">© Copyright 2023 DECOR VISION</p>
      </div>
    </footer>
  );
};

export default Footer;
