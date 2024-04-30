import { Link } from "react-router-dom";
import HeadProizvod from "../Components/HeadProizvod";
import "../Stilovi/Stranica.scss";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const Lapitec = ({ lapitec, noIMG }) => {
  const { theme } = useContext(ThemeContext);
  const headline = "LAPITEC";

  return (
    <div className={`lapitec page ${theme}`}>
      <HeadProizvod headline={headline} />

      <div className="container">
        <p className="kategorija-info lapitec">
          Lapitec kolekcije prate najnovije trendove dizajna i proizvode se
          korišćenjem najsavremenijih tehnologija. Sa izuzetnim dizajnom i
          dekorativnim potencijalom, ove kolekcije nude zadivljujuću estetiku,
          stvarajući dinamičan moderan izgled i generišu toplinu i emocije.
        </p>

        <div className="potkategorije">
          <div className="side left">
            <div className="text-part">
              <h2>Musa</h2>
              <p className="desc">Lagano, svetlo, elegantno.</p>
              <p>
                Musa kolekcija se odlikuje dugim žilama koje prolaze kroz
                debljinu svake ploče, ukrštajući jedna drugu. Visoka
                tehnologija, moderan dizajn i lagane, eterične nijanse. Ova
                kolekcija slavi večnu eleganciju italijanske umetnosti.
              </p>
            </div>
            <div className="img-container left"></div>
          </div>

          <div className="side right">
            <div className="text-part">
              <h2>Essenza</h2>
              <p className="desc">Linearno, jednobojno, teksturirano.</p>
              <p>
                Essenza kolekcija prikazuje snagu zemlje, kombinovanu sa
                italijanskom tradicijom i stilom, izražavajući sve nijanse
                prirodnih pejzaža kroz dostupne lagane boje.
              </p>
            </div>

            <div className="img-container right"></div>
          </div>
        </div>

        <div className="grid-proizvoda lapitec">
          {lapitec.map(
            ({
              ime,
              index,
              firma,
              patern,
              wide,
              kvadrat,
              opis,
              debljine,
              proizvodjac,
            }) => (
              <>
                <div className="proizvod" key={ime}>
                  <Link
                    to={`/proizvodi/${proizvodjac}/${firma}/${ime}`}
                    state={{
                      proizvod: {
                        ime,
                        index,
                        firma,
                        opis,
                        debljine,
                        kvadrat,
                        patern,
                        wide,
                        proizvodjac,
                      },
                    }}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <div className="img-container">
                      <img src={kvadrat || noIMG} alt={ime} />
                    </div>
                  </Link>
                  <p className="ime-proizvoda">{ime}</p>
                  <p className="proizvodjac">{firma}</p>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Lapitec;
