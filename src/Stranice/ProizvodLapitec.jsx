import "../Stilovi/Stranica.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Forma from "../Komponente/Forma";

const ProizvodLapitec = ({ noIMG, isOpen, openIMG, selectedIMG, closeIMG }) => {
  const [subject, setSubject] = useState("");
  const location = useLocation();
  const { ime, firma, wide, opis, debljine, kvadrat, patern, proizvodjac } =
    location.state.proizvod;

  useEffect(() => {
    setSubject(`${firma}, ${ime}`);
  }, [firma, ime]);

  const naslov = "POŠALJI UPIT ZA OVAJ PROIZVOD";

  return (
    <div className="lapitec proizvod page">
      <div className="proizvod-head">
        <img src={patern} />
        <div className="proizvod-naslov">
          <h5>{ime}</h5>
          <h6>{firma}</h6>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <p className="opis">{opis}</p>
          <p className="key">
            Dostupne debljine: <span>{debljine}</span>
          </p>
        </div>

        <div className="proizvod-grid">
          <div className="levo">
            <div
              className="grid-img-container one"
              onClick={() => openIMG(patern || noIMG)}
            >
              <img src={patern || noIMG} alt={`patern ${ime}`} />
            </div>
            <div className="levo-dole">
              <div
                className="grid-img-container two"
                onClick={() => openIMG(kvadrat || noIMG)}
              >
                <img src={kvadrat || noIMG} alt={`kvadrat ${ime}`} />
              </div>
              <div
                className="grid-img-container two"
                onClick={() => openIMG(wide || noIMG)}
              >
                <img src={wide || noIMG} alt={`wide ${ime}`} />
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

export default ProizvodLapitec;
