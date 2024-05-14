import "../Stilovi/Komponente.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import ThemeContext from "../Helpers/ThemeContext";

const Navbar = ({ showSidebar, handleClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={theme}>
      <div className="nav-container">
        <Link
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            id="decor-logo"
            src="/slike/logos/decor_vision.svg"
            alt="DECOR VISION"
          />
        </Link>
        <NavLinks />
        {showSidebar && <Sidebar handleClick={handleClick} />}
        <button onClick={handleClick} className="menu-button">
          <img src="/slike/icons/menu.svg" alt="menu" />
        </button>

        {showSidebar && (
          <button onClick={handleClick} className="x-button">
            <img src="/slike/icons/close.svg" alt="X" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
