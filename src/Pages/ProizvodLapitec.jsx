import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";
import "../Stilovi/Stranica.scss";

const ProizvodLapitec = ({ noIMG }) => {
  const location = useLocation();
  const { ime, firma, wide, opis, debljine, narrow, patern } =
    location.state.proizvod;

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
            <div className="grid-img-container one">
              <img src={wide || noIMG} alt={`wide ${ime}`} />
            </div>
            <div className="levo-dole">
              <div className="grid-img-container two">
                <img src={narrow || noIMG} alt={`narrow ${ime}`} />
              </div>
              <div className="grid-img-container two">
                <img src={patern || noIMG} alt={`patern ${ime}`} />
              </div>
            </div>
          </div>
          <ProizvodForma />
        </div>
      </div>
    </div>
  );
};

export default ProizvodLapitec;
