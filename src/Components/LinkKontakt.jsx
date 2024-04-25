import { Link } from "react-router-dom";

const LinkKontakt = () => {
    return ( 
        <Link
            to="/kontakt"
            className="link-kontakt"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Kontaktirajte nas!
          </Link>
     );
}
 
export default LinkKontakt;