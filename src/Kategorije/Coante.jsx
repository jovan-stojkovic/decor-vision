import "../Stilovi/Stranica.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HeadProizvod from "../Komponente/HeadProizvod";
import ThemeContext from "../Helpers/ThemeContext";

const Coante = ({ coante, noIMG }) => {
  const { theme } = useContext(ThemeContext);
  const headline = "COANTE";

  return (
    <div className={`coante page ${theme}`}>
      <HeadProizvod headline={headline} />

      <div className="container">
        <p className="kategorija-info">
          Sa izuzetnim zadovoljstvom Vam predstavljamo{" "}
          <Link target="_blank" to="https://www.coante.com/">
            Coante
          </Link>
          , inovativni kvarc materijal u velikim pločama vrhunskog kvaliteta.
        </p>

        <p className="kategorija-info">
          Veliki broj dezena, moderan dizajn, vrhunska izdržljivost i idealan
          odnos cene i kvaliteta.
        </p>

        <div className="grid-proizvoda">
          {coante.map(({ ime, slike, dimenzije, debljine, proizvodjac }) => (
            <div className="proizvod" key={ime}>
              <Link
                to={`/proizvodi/${proizvodjac}/${ime}`}
                state={{
                  proizvod: {
                    ime,
                    slike,
                    dimenzije,
                    debljine,
                    proizvodjac,
                  },
                }}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <div className="img-container">
                  <img
                    src={slike?.[0] || noIMG}
                    alt={ime}
                  />
                </div>
              </Link>

              <p className="ime-proizvoda">{ime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coante;