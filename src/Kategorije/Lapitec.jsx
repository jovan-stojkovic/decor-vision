import "../Stilovi/Stranica.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HeadProizvod from "../Komponente/HeadProizvod";
import ThemeContext from "../Helpers/ThemeContext";

const Lapitec = ({ lapitec, noIMG }) => {
  const { theme } = useContext(ThemeContext);
  const headline = "LAPITEC";

  return (
    <div className={`lapitec page ${theme}`}>
      <HeadProizvod headline={headline} />

      <div className="container">
        <p className="kategorija-info lapitec">
          Sa izuzetnim zadovoljstvom Vam predstavljamo{" "}
          <Link target="_blank" to="https://www.lapitec.com/">
            Lapitec
          </Link>
          , inovativni materijal proizveden u velikim pločama od strane našeg
          italijanskog partnera, koji se može koristiti i u zatvorenom i na
          otvorenom za različite namene.
        </p>
        <p className="kategorija-info lapitec">
          Veliki broj različitih dezena i završnih obrada površine, vrhunski
          italijanski dizajn i jedinstven kvalitet koji će vas osvojiti{" "}
          <Link
            target="_blank"
            to="https://www.lapitec.com/ContentsFiles/Collections%20Brochure(0).pdf"
          >
            (Link)
          </Link>.
        </p>
        <p>
          <ul>
            <li>
              Jedini sintrovani kamen na svetu sertifikovan od Evropske
              komisije;
            </li>
            <li>
              100% prirodan i proizveden uz poštovanje najviših ekoloških
              standarda;
            </li>
            <li>Napravljen od najčistijih minerala na Zemlji;</li>
            <li>Higijenski i antibakterijski;</li>
            <li>Lako se čisti – neproziran i otporan na mrlje;</li>
            <li>Otporan na grebanje;</li>
            <li>Otporan na toplotu; </li>
            <li>UV stabilan – ne menja boju pod uticajem sunčeve svetlosti;</li>
            <li>Otporan na hemikalije; </li>
            <li>Otporan na niske temperature;</li>
            <li>Silica free;</li>
            <li>Garancija od čak 25 godina!</li>
          </ul>
        </p>

        <div className="lapitec-links">
          <Link
            target="_blank"
            to="https://www.lapitec.com/en/technical-assistance"
          >
            Tehnička podrška
          </Link>
          <Link target="_blank" to="https://www.lapitec.com/en/catalogues">
            Katalozi
          </Link>
        </div>

        <p className="kategorija-info bold">
          Dođite do nas da uživo pogledate ovaj izuzetan materijal i proverite
          zašto nema konkurenciju!
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
                      <img src={patern || noIMG} alt={ime} />
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
