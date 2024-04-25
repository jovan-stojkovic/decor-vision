import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showNavbarDiv, setShowNavbarDiv] = useState(false);

  const handleHover = (hovering) => {
    setShowNavbarDiv(hovering);
  };

  const handleSubmenuHover = (hovering) => {
    if (!hovering && showNavbarDiv) {
      setShowNavbarDiv(false);
    }
  };

  const instaPage = "https://www.instagram.com/decorvision.rs/?hl=en";
  const kategorije = ["Lapitec", "Latho", "Kameni furniri", "Tapete"];

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img src="/slike/logos/decor_vision.svg" alt="DECOR VISION" />
        </Link>
        <div className="nav-links">
          <div
            className="proizvodi-div"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <NavLink className="nav-link" to="/proizvodi">
              PROIZVODI
            </NavLink>

            <div
              className={`hidden-nav-div ${showNavbarDiv ? "show" : ""}`}
              onMouseEnter={() => handleSubmenuHover(true)}
              onMouseLeave={() => handleSubmenuHover(false)}
            >
              <div className="empty"></div>
              <div className="hidden-nav-div-cont">
                {kategorije.map((kategorija, index) => (
                  <Link
                    key={index}
                    className="hidden-category"
                    to={`/proizvodi/${kategorija}`}
                  >
                    {kategorija}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink className="nav-link" to="/o-nama">
            O NAMA
          </NavLink>
          <NavLink className="nav-link" to="/b2b">
            B2B
          </NavLink>
          <NavLink className="nav-link" to="/kontakt">
            KONTAKT
          </NavLink>
          <Link to={instaPage} target="_blank" id="insta-link" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
