import "../Stilovi/Stranica.scss";
import { useContext } from "react";
import Head from "../Komponente/Head";
import LinkKontakt from "../Komponente/LinkKontakt";
import ThemeContext from "../Helpers/ThemeContext";

const ONama = () => {
  const { theme } = useContext(ThemeContext);

  const headline = "O NAMA";
  const text =
    "Dobrodošli u naš svet. Naša strast prema dekoraciji prostora traje već dugo. Naša priča počinje sa vizijom da svaki prostor može postati remek-delo, a svaki dom - priča za sebe.";
  return (
    <div className={`page o-nama ${theme}`}>
      <Head headline={headline} text={text} />

      <div className="container">
        <div className="o-nama gore">
          <div className="levo"></div>
          <div className="desno">
            <h2>MI BUDIMO VAŠE ŽELJE I POKLANJAMO VAM SVOJU KREATIVNOST</h2>
            <div className="separator"></div>
            <p>
              Mi smo tim entuzijasta koji su posvećeni donošenju najfinijih
              brendova u vaš dom. Naš cilj je da spojimo funkcionalnost i
              estetiku, kako biste uživali u svakom trenutku provedenom u svom
              okruženju. Kada biramo brendove koje zastupamo, ne gledamo samo na
              kvalitet, već i na priču koju svaki od njih nosi. Želimo da svaki
              komad dekoracije prostora/nameštaja u vašem domu ili poslovnom
              prostoru ima svoju priču, svoju dušu.
            </p>

            <p>
              To je ono što nas izdvaja - sposobnost da stvorimo priču u svakom
              detalju.
            </p>
          </div>
        </div>

        <div className="dole">
          <h2>U SVAKOM TRENUTKU PRUŽAMO VAM PUNO PODRŠKU</h2>
          <div className="separator"></div>
          <p>
            Kontaktirajte nas i zajedno ćemo pretvoriti vaše projekte u
            umetnička dela.
          </p>

          <LinkKontakt />
        </div>

        <div className="o-nama-grid">
          <div className="o-nama-grid-img one"></div>
          <div className="o-nama-grid-img two"></div>
          <div className="o-nama-grid-img three"></div>
          <div className="o-nama-grid-img four"></div>
        </div>
      </div>
    </div>
  );
};

export default ONama;
