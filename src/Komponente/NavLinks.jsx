import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const NavLinks = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
  const kategorije = ["Lapitec", "Latho", "Kameni furniri", "Tapete", "Kvarc"  ];

  return (
    <div className="nav-links">
      <div
        className="proizvodi-div"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <NavLink
          className="nav-link"
          to="/proizvodi"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
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
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {kategorija}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <NavLink
        className="nav-link"
        to="/o-nama"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        O NAMA
      </NavLink>
      <NavLink
        className="nav-link"
        to="/b2b"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        B2B
      </NavLink>
      <NavLink
        className="nav-link"
        to="/kontakt"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        KONTAKT
      </NavLink>
      <Link to={instaPage} target="_blank" id="insta-link" />
      <button className={`theme-btn ${theme}`} onClick={toggleTheme}></button>
    </div>
  );
};

export default NavLinks;
