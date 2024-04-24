import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";

const ProizvodLapitec = ({ noIMG }) => {
  const location = useLocation();
  const { ime, firma, wide, opis, debljine, narrow, patern } =
    location.state.proizvod;

  return (
    <div className="lapitec-proizvod-page page">
      <div className="proizvod-head">
        <img src={patern} />
        <div className="proizvod-naslov">
          <h3>{ime}</h3>
          <p>{firma}</p>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <p>{opis}</p>
          <p className="p-debljine">
            Dostupne debljine: <span>{debljine}</span>
          </p>
        </div>
        <div className="proizvod-grid">
          <div className="grid-img-container" id="grid-one">
            <img src={wide || noIMG} alt={`wide ${ime}`} />
          </div>
          <ProizvodForma />
          <div className="grid-img-container" id="grid-three">
            <img src={narrow || noIMG} alt={`narrow ${ime}`} />
          </div>
          <div className="grid-img-container" id="grid-four">
            <img src={patern || noIMG} alt={`patern ${ime}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProizvodLapitec;
