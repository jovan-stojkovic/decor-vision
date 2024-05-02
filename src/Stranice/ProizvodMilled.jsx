import { useLocation } from "react-router-dom";
import Forma from "../Components/Forma";
import "../Stilovi/Stranica.scss";
import { useState, useEffect } from "react";

const ProizvodMilled = ({
  noIMG,
  lathoMilledInfo,
  isOpen,
  openIMG,
  selectedIMG,
  closeIMG,
}) => {
  const location = useLocation();
  const { ime, kvadrat, strana, patern, tech, index, firma } = location.state.proizvod;
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setSubject(`${firma}, ${ime}`);
  }, [firma, ime]);

  const naslov = "POŠALJI UPIT ZA OVAJ PROIZVOD";

  return (
    <div className="proizvod milled page">
      <div className="proizvod-head">
        <img src={patern} />
        <div className="proizvod-naslov">
          <h5>{ime}</h5>
          <h6>{lathoMilledInfo.firma}</h6>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <p className="key">
            Varijante: <span>{lathoMilledInfo.varijante}</span>
          </p>
          <p className="key">
            Podrška: <span>{lathoMilledInfo.podrška}</span>
          </p>
          <p className="key">
            Materijali: <span>{lathoMilledInfo.materijali}</span>
          </p>
          <p className="key">
            Obrada: <span>{lathoMilledInfo.obrada}</span>
          </p>
          <p className="key">
            Ivica: <span>{lathoMilledInfo.ivice}</span>
          </p>
        </div>

        <div className="proizvod-grid">
          <div className="levo">
            <div
              className="grid-img-container one"
              onClick={() => openIMG(patern || noIMG)}
            >
              <img src={patern || noIMG} alt={`wide ${ime}`} />
            </div>
            <div className="levo-dole">
              <div
                className="grid-img-container two"
                onClick={() => openIMG(tech || noIMG)}
              >
                <img src={tech || noIMG} alt={`tech ${ime}`} />
              </div>
              <div
                className="grid-img-container two"
                onClick={() => openIMG(strana || noIMG)}
              >
                <img src={strana || noIMG} alt={`patern ${ime}`} />
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="large-image open">
              <img src={selectedIMG} alt="Large Image" />
              <button onClick={closeIMG}>
                <img src="/slike/icons/close.svg" alt="a" />
              </button>
            </div>
          )}
          <Forma subject={subject} naslov={naslov} />
        </div>
      </div>
    </div>
  );
};

export default ProizvodMilled;
