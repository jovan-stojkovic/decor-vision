import { Link } from "react-router-dom";
import HeadProizvod from "../Components/HeadProizvod";
import "../Stilovi/Stranica.scss";


const Latho = ({
  lathoMilled,
  lathoMilledInfo,
  lathoMove,
  lathoMoveInfo,
  noIMG,
}) => {
  const headline = "LATHO";
  return (
    <div className="latho page">
      <HeadProizvod headline={headline} />

      <div className="container">
        <p className="kategorija-info latho">
          Vrhunski pločasti materijala od drveta.
        </p>
        <p className="kategorija-info latho">
          Nudimo vam pločaste materijale koji istinski obogaćuju prostor,
          izazivaju oduševljenje i bude vizuelnu i taktilnu radoznalost.
        </p>
        <p className="kategorija-info latho">Made in Italy.</p>

        <p className="kategorija-info latho">
          50 godina iskustva, gde profesionalizam i strast prema poslu čine
          temelj uspeha.
        </p>

        <div className="potkategorije latho">
          <div className="side left">
            <div className="text-part">
              <h3>Milled</h3>
            </div>
            <div className="img-container left" id="move-img-container-l"></div>
          </div>

          <div className="side right">
            <div className="text-part">
              <h3>Move</h3>
            </div>

            <div
              className="img-container right"
              id="move-img-container-r"
            ></div>
          </div>
        </div>
        <div className="grid-proizvoda latho">
          {lathoMilled.map(({ ime, kvadrat, strana, patern, tech, index }) => (
            <div className="proizvod" key={ime}>
              <Link
                to={`/proizvodi/Latho/Milled/${ime}`}
                state={{
                  proizvod: { ime, kvadrat, strana, patern, tech, index },
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="img-container">
                  <img src={kvadrat || noIMG} alt={ime} />
                </div>
              </Link>
              <p className="ime-proizvoda">{ime}</p>
              <p className="proizvodjac">{lathoMilledInfo.firma}</p>
            </div>
          ))}
          {lathoMove.map(({ ime, kvadrat, wide }) => (
            <div className="proizvod" key={ime}>
              <Link
                to={`/proizvodi/Latho/Move/${ime}`}
                state={{
                  proizvod: { ime, kvadrat, wide },
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="img-container">
                  <img src={kvadrat || wide || noIMG} alt={ime} />
                </div>
              </Link>
              <p className="ime-proizvoda">{ime}</p>
              <p className="proizvodjac">{lathoMoveInfo.firma}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latho;
