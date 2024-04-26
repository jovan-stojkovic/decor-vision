import { Link, NavLink } from "react-router-dom";

const SidebarLinks = () => {
  const instaPage = "https://www.instagram.com/decorvision.rs/?hl=en";

  return (
    <div className="sidebar">
      <NavLink
        className="sidebar-nav-link"
        to="/proizvodi"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        PROIZVODI
      </NavLink>
      <ul className="kategorije">
        <NavLink
          className="sidebar-kategorija sidebar-nav-link"
          to="/proizvodi/Lapitec"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          LAPITEC
        </NavLink>
        <NavLink
          className="sidebar-kategorija sidebar-nav-link"
          to="/proizvodi/Latho"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          LATHO
        </NavLink>
        <NavLink
          className="sidebar-kategorija sidebar-nav-link"
          to="/proizvodi/Kameni Furniri"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          KAMENI FURNIRI
        </NavLink>
        <NavLink
          className="sidebar-kategorija sidebar-nav-link"
          to="/proizvodi/Tapete"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          TAPETE
        </NavLink>
      </ul>
      <NavLink
        className="sidebar-nav-link"
        to="/o-nama"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        O NAMA
      </NavLink>
      <NavLink
        className="sidebar-nav-link"
        to="/b2b"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        B2B
      </NavLink>
      <NavLink
        className="sidebar-nav-link"
        to="/kontakt"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        KONTAKT
      </NavLink>
      <Link to={instaPage} target="_blank" className="sidebar-instagram sidebar-nav-link">
        INSTAGRAM
      </Link>
    </div>
  );
};

export default SidebarLinks;
