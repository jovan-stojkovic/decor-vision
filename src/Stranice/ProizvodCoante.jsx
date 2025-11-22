import "../Stilovi/Stranica.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import KontaktInfo from "../Komponente/KontaktInfo";

const ProizvodCoante = ({ noIMG }) => {
  const location = useLocation();
  const { ime, slike, dimenzije, debljine, proizvodjac } =
    location.state.proizvod;

  const [selectedIMG, setSelectedIMG] = useState(null);

  const openIMG = (src) => setSelectedIMG(src);
  const closeIMG = () => setSelectedIMG(null);

  const [subject, setSubject] = useState("");

  useEffect(() => {
    setSubject(`${proizvodjac}, ${ime}`);
  }, [proizvodjac, ime]);

    // ESC za zatvaranje velike slike
    useEffect(() => {
      const handleKey = (e) => {
        if (e.key === "Escape") {
          closeIMG();
        }
      };
      document.addEventListener("keydown", handleKey);
      return () => {
        document.removeEventListener("keydown", handleKey);
      };
    }, []);

  const naslov = "POŠALJI UPIT ZA OVAJ PROIZVOD";

  return (
    <div className="coante proizvod page">
      {/* NASLOV */}
      <div className="proizvod-head">
        <img src={slike?.[0] || noIMG} alt={ime} />
        <div className="proizvod-naslov">
          <h5>{ime}</h5>
          <h6>{proizvodjac}</h6>
        </div>
      </div>

      <div className="container">
        {/* INFO */}
        <div className="text">
          <p className="key">
            Dimenzije: <span>{dimenzije}</span>
          </p>
          <p className="key">
            Debljine: <span>{debljine}</span>
          </p>
        </div>

        <div className="big-pic">
          <img src={slike[2]} alt="slika" />
        </div>

        {/* GRID SLIKA */}
        <div className="proizvod-grid">
          <div className="galerija">
            {slike.map((src, i) => (
              <div
                className="grid-img-container dynamic"
                key={i}
                onClick={() => openIMG(src)}
              >
                <img src={src} alt={`${ime} - slika ${i + 1}`} />
              </div>
            ))}
          </div>

          {/* LARGE IMAGE PREVIEW */}
          {selectedIMG && (
            <div className="large-image open">
              <img src={selectedIMG} alt="Large Preview" onClick={closeIMG} />
            </div>
          )}
        </div>
      <KontaktInfo />
      </div>
    </div>
  );
};

export default ProizvodCoante;
