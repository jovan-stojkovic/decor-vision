import { Link } from "react-router-dom";
import Head from "../Components/Head";
import LinkKontakt from "../Components/LinkKontakt";
import BtoBGrid from "../Components/BtoBGrid";
import "../Stilovi/Stranica.scss";


const BtoB = () => {
  const headline = "POSLOVNA SARADNJA";
  const text = "Tu smo da stvaramo uspešne priče.";
  return (
    <div className="btob page">
      <Head headline={headline} text={text} />

      <div className="container">
        <div className="btob gore">
          <div className="levo"></div>
          <div className="desno">
            <h2>Dragi poslovni partneri,</h2>
            <div className="separator"></div>
            <p>
              U vašem traganju za najfinijim detaljima u dekoraciji prostora, mi
              smo tu da vas podržimo. Kao direktni zastupnici premium brendova u
              svetu dekoracije i uređenja prostora, pozivamo vas da zajedno
              stvaramo nezaboravne enterijere.
            </p>

            <p>
              Sa konkurentnim i fleksibilnim uslovima nabavke, obezbeđujemo da
              vaši projekti budu ne samo estetski besprekorni, već i finansijski
              isplativi.
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
        <BtoBGrid />
      </div>
    </div>
  );
};

export default BtoB;
