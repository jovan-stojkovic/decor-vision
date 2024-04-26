import { Link, useAsyncError } from "react-router-dom";
import "../Stilovi/Component.scss";
import NavLinks from "./NavLinks";
import SidebarLinks from "./SidebarLinks";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <nav>
      <div className="nav-container">
        <Link
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/slike/logos/decor_vision.svg" alt="DECOR VISION" />
        </Link>
        <NavLinks />
        {showSidebar && <SidebarLinks />}
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
