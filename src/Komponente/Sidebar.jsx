import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const Sidebar = ({ handleClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const instaPage = "https://www.instagram.com/decorvision.rs/?hl=en";

  return (
    <div className="sidebar">
      <div className="dark-part" onClick={handleClick}></div>
      <div className="sidebar-container">
        <NavLink
          className="sidebar-nav-link"
          to="/proizvodi"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleClick();
          }}
        >
          PROIZVODI
        </NavLink>
        <ul className="kategorije">
          <NavLink
            className="sidebar-kategorija sidebar-nav-link"
            to="/proizvodi/Lapitec"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleClick();
            }}
          >
            LAPITEC
          </NavLink>
          <NavLink
            className="sidebar-kategorija sidebar-nav-link"
            to="/proizvodi/Latho"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleClick();
            }}
          >
            LATHO
          </NavLink>
          <NavLink
            className="sidebar-kategorija sidebar-nav-link"
            to="/proizvodi/Kameni Furniri"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleClick();
            }}
          >
            KAMENI FURNIRI
          </NavLink>
          <NavLink
            className="sidebar-kategorija sidebar-nav-link"
            to="/proizvodi/Tapete"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleClick();
            }}
          >
            TAPETE
          </NavLink>
          <NavLink
            className="sidebar-kategorija sidebar-nav-link"
            to="/proizvodi/Kvarc"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleClick();
            }}
          >
            KVARC
          </NavLink>
        </ul>
        <NavLink
          className="sidebar-nav-link"
          to="/o-nama"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleClick();
          }}
        >
          O NAMA
        </NavLink>
        <NavLink
          className="sidebar-nav-link"
          to="/b2b"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleClick();
          }}
        >
          B2B
        </NavLink>
        <NavLink
          className="sidebar-nav-link"
          to="/kontakt"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleClick();
          }}
        >
          KONTAKT
        </NavLink>
        <Link
          to={instaPage}
          target="_blank"
          className="sidebar-instagram sidebar-nav-link"
        >
          INSTAGRAM
        </Link>
        <button
          className="sidebar-theme-btn sidebar-nav-link"
          onClick={toggleTheme}
        >
          {`${theme.toUpperCase()} THEME`}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
