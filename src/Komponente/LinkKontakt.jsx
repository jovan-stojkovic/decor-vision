import { Link } from "react-router-dom";

const LinkKontakt = () => {
  return (
    <Link
      to="/kontakt"
      className="link-kontakt"
      onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
    >
      Kontaktirajte nas!
    </Link>
  );
};

export default LinkKontakt;
