import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";
import "../Stilovi/Stranica.scss";

const ProizvodMove = ({
  noIMG,
  lathoMoveInfo,
  isOpen,
  openIMG,
  selectedIMG,
  closeIMG,
}) => {
  const location = useLocation();
  const { ime, kvadrat, wide } = location.state.proizvod;

  return (
    <>
      <div className="proizvod move page">
        <div className="proizvod-head">
          <img src={kvadrat || wide} />
          <div className="proizvod-naslov">
            <h5>{ime}</h5>
            <h6>{lathoMoveInfo.firma}</h6>
          </div>
        </div>

        <div className="container">
          <div className="text">
            <p className="opis">
              <span>{lathoMoveInfo.info}</span>
            </p>
            <p className="key">
              Debljina: <span>{lathoMoveInfo.debljina}</span>
            </p>
            <p className="key">
              Dimenzije: <span>{lathoMoveInfo.dimenzija}</span>
            </p>
          </div>

          <div className="proizvod-grid">
            <div className="levo move">
              <div
                className="grid-img-container"
                onClick={() => openIMG(wide || noIMG)}
              >
                <img src={wide || noIMG} alt={`wide ${ime}`} />
              </div>
              <div className="levo-dole move">
                <div
                  className="grid-img-container"
                  onClick={() => openIMG(kvadrat || noIMG)}
                >
                  <img src={kvadrat || noIMG} alt={`tech ${ime}`} />
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
    </>
  );
};

export default ProizvodMove;
