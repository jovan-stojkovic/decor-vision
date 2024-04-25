import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer-logo" onClick={()=>window.scrollTo(0,0)}>
          <img src="/public/slike/logos/decor_vision.svg" alt="DECOR VISION" />
        </Link>

          <Link to="/uslovi-koriscenja" className="uslovi-link"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          >
            USLOVI KORIŠĆENJA | PRAVILA PRIVATNOSTI
          </Link>

        <p className="copyright">© Copyright 2023 DECOR VISION</p>
    
    </footer>
  );
};

export default Footer;
