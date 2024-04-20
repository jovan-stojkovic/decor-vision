import { Link } from "react-router-dom";

const BtoB = () => {
  return (
    <div className="btob-page">
      <div className="btob-head head">
        <h3>POSLOVNA SARADNJA</h3>
        <div className="separator"></div>
        <p className="opis">Tu smo da stvaramo uspešne priče.</p>
        <div className="arrows"></div>
      </div>

      <div className="btob-container">
        <div className="btob-main">
          <div className="left-side-img"></div>
          <div className="right-side">
            <h3>Dragi poslovni partneri,</h3>
            <div className="separator"></div>
            <p className="text">
              U vašem traganju za najfinijim detaljima u dekoraciji prostora, mi
              smo tu da vas podržimo. Kao direktni zastupnici premium brendova u
              svetu dekoracije i uređenja prostora, pozivamo vas da zajedno
              stvaramo nezaboravne enterijere.
            </p>

            <p className="text">
              Sa konkurentnim i fleksibilnim uslovima nabavke, obezbeđujemo da
              vaši projekti budu ne samo estetski besprekorni, već i finansijski
              isplativi.
            </p>
          </div>
        </div>

        <div className="btob-ispod">
          <h3>U SVAKOM TRENUTKU PRUŽAMO VAM PUNO PODRŠKU</h3>
          <div className="separator"></div>
          <p>
            Kontaktirajte nas i zajedno ćemo pretvoriti vaše projekte u
            umetnička dela.
          </p>
          <Link to="/kontakt">Kontaktirajte nas!</Link>
        </div>

        <div className="btob-grid">
            <Link to="https://www.latho.it/en/" className="btob-grid-img one" target="_blank"/>
            <Link to="https://www.lapitec.com/" className="btob-grid-img two" target="_blank"/>
            <Link to="https://www.slate-lite.com/eng/" className="btob-grid-img three" target="_blank"/>
            <Link to="https://www.decoprintwallcoverings.com/" className="btob-grid-img four" target="_blank"/>


        </div>
      </div>
    </div>
  );
};

export default BtoB;
