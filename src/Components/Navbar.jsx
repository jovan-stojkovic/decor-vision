import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const instaPage = "https://www.instagram.com/decorvision.rs/?hl=en";

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          DECOR VISION
        </Link>
        <div className="nav-links">
          <NavLink to="/proizvodi">PROIZVODI</NavLink>
          <NavLink to="/o-nama">O NAMA</NavLink>
          <NavLink to="/b2b">B2B</NavLink>
          <NavLink to="/kontakt">KONTAKT</NavLink>
          <Link to={instaPage} target="_blank" id="insta-link">
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
