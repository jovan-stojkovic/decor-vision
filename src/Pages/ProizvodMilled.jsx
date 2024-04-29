import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";
import "../Stilovi/Stranica.scss";

const ProizvodMilled = ({
  noIMG,
  lathoMilledInfo,
  isOpen,
  openIMG,
  selectedIMG,
  closeIMG,
}) => {
  const location = useLocation();
  const { ime, kvadrat, strana, patern, tech, index } = location.state.proizvod;

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
          <ProizvodForma />
        </div>
      </div>
    </div>
  );
};

export default ProizvodMilled;
