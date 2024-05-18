import "../Stilovi/Stranica.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Forma from "../Komponente/Forma";

const ProizvodKvarc = ({ noIMG, isOpen, openIMG, selectedIMG, closeIMG }) => {
  const [subject, setSubject] = useState("");
  const location = useLocation();
  const { ime, slikaJedan, slikaDva, slikaTri, slikaCetiri } =
    location.state.proizvod;

  useEffect(() => {
    setSubject(ime);
  }, [ime]);

  const naslov = "POŠALJI UPIT ZA OVAJ PROIZVOD";

  return (
    <div className="kvarc proizvod page">
      <div className="proizvod-head">
        <div className="proizvod-naslov">
          <h5>{ime}</h5>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <p className="opis">
            Kvarc je sve zastuljeniji zbog svoje izdržljivosti, estetike i
            praktičnosti. Kvarc se sastoji od prirodnog minerala kvarca koji se
            kombinuje sa polimerima i pigmentima kako bi se stvorila čvrsta i
            otporna površina.
          </p>
          <p className="key">
            Dimenzije ploča: <span>320cm x 160cm i 305cm x 152cm</span>
          </p>
          <p className="key">
            Debljine ploča: <span>1,5cm, 2cm i 3cm</span>
          </p>
        </div>

        <div className="proizvod-grid">
          <div className="levo">
            <div
              className="grid-img-container one"
              onClick={() => openIMG(slikaJedan || noIMG)}
            >
              <img src={slikaJedan || noIMG} alt={`slikaJedan ${ime}`} />
            </div>
            <div className="levo-dole">
              <div
                className="grid-img-container two"
                onClick={() => openIMG(slikaDva || noIMG)}
              >
                <img src={slikaDva || noIMG} alt={`slikaDva ${ime}`} />
              </div>
              <div
                className="grid-img-container two"
                onClick={() => openIMG(slikaTri || noIMG)}
              >
                <img src={slikaTri || noIMG} alt={`slikaTri ${ime}`} />
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

export default ProizvodKvarc;
