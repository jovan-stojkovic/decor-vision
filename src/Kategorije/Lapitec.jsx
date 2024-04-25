import { Link } from "react-router-dom";
import HeadProizvod from "../Components/HeadProizvod";

const Lapitec = ({ lapitec, noIMG }) => {
  const headline = "LAPITEC"
  return (
    <div className="lapitec-page page">
      <HeadProizvod headline={headline}/>

      

      <div className="container lapitec">
        <p className="kategorija-info lapitec">
          Lapitec kolekcije prate najnovije trendove dizajna i proizvode se
          korišćenjem najsavremenijih tehnologija. Sa izuzetnim dizajnom i
          dekorativnim potencijalom, ove kolekcije nude zadivljujuću estetiku,
          stvarajući dinamičan moderan izgled i generišu toplinu i emocije.
        </p>

        <div className="potkategorije lapitec">
          <div className="side left">
            <div className="text-part">
              <h3>Musa</h3>
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
              <h3>Essenza</h3>
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
            ({ ime, index, firma, patern, wide, narrow, opis, debljine }) => (
              <div className="proizvod" key={index}>
                <Link
                  to={`/proizvodi/lapitec/${firma}/${ime}`}
                  state={{
                    proizvod: {
                      ime,
                      index,
                      firma,
                      opis,
                      debljine,
                      narrow,
                      patern,
                      wide,
                    },
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="img-container">
                    <img src={narrow || noIMG} alt={ime} />
                  </div>
                </Link>
                <p className="ime-proizvoda">{ime}</p>
                <p className="proizvodjac">{firma}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Lapitec;
