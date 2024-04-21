import { Link } from "react-router-dom";

const ONama = () => {
  return (
    <div className="o-nama-page page">
      <div className="head">
        <h3>O NAMA</h3>
        <div className="separator"></div>
        <p className="opis">
          Dobrodošli u naš svet. <br /> Naša strast prema dekoraciji prostora
          traje već dugo. Naša priča počinje sa vizijom da svaki prostor može
          postati remek-delo, a svaki dom - priča za sebe.
        </p>
        <div className="arrows"></div>
      </div>

      <div className="container">
        <div className="gore">
          <div className="left-side"></div>
          <div className="right-side">
            <h3>MI BUDIMO VAŠE ŽELJE I POKLANJAMO VAM SVOJU KREATIVNOST</h3>
            <div className="separator"></div>
            <p className="text">
              Mi smo tim entuzijasta koji su posvećeni donošenju najfinijih
              brendova u vaš dom. Naš cilj je da spojimo funkcionalnost i
              estetiku, kako biste uživali u svakom trenutku provedenom u svom
              okruženju. Kada biramo brendove koje zastupamo, ne gledamo samo na
              kvalitet, već i na priču koju svaki od njih nosi. Želimo da svaki
              komad dekoracije prostora/nameštaja u vašem domu ili poslovnom
              prostoru ima svoju priču, svoju dušu.
            </p>

            <p className="text">
              To je ono što nas izdvaja - sposobnost da stvorimo priču u svakom
              detalju.
            </p>
          </div>
        </div>

        <div className="dole">
          <h3>U SVAKOM TRENUTKU PRUŽAMO VAM PUNO PODRŠKU</h3>
          <div className="separator"></div>
          <p>
            Kontaktirajte nas i zajedno ćemo pretvoriti vaše projekte u
            umetnička dela.
          </p>
          <Link to="/kontakt" className="link-kontakt">
            Kontaktirajte nas!
          </Link>
        </div>

        <div className="o-nama-grid">
          <div className="o-nama-grid-img one"></div>
          <div className="o-nama-grid-img two"></div>
          <div className="o-nama-grid-img three"></div>
          <div className="o-nama-grid-img four"></div>
          <div className="o-nama-grid-img five"></div>
        </div>
      </div>
    </div>
  );
};

export default ONama;
