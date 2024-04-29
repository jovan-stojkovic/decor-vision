import { Link } from "react-router-dom";
import "../Stilovi/Component.scss";
import NavLinks from "./NavLinks";
import SidebarLinks from "./SidebarLinks";

const Navbar = ({ showSidebar, handleClick }) => {
  return (
    <nav>
      <div className="nav-container">
        <Link
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img id="decor-logo" src="/slike/logos/decor_vision.svg" alt="DECOR VISION" />
        </Link>
        <NavLinks />
        {showSidebar && <SidebarLinks handleClick={handleClick} />}
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
