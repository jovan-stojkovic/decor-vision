import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";

const ProizvodMilled = ({ noIMG, lathoMilledInfo }) => {
  const location = useLocation();
  const { ime, kvadrat, strana, patern, tech, index } = location.state.proizvod;

  return (
    <div className="proizvod-page milled page">
      <div className="proizvod-head">
        <img src={patern} />
        <div className="proizvod-naslov">
          <h3>{ime}</h3>
          <p>{lathoMilledInfo.firma}</p>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <p className="p-milled-opis">
            Varijante: <span>{lathoMilledInfo.varijante}</span>
          </p>
          <p className="p-milled-opis">
            Podrška: <span>{lathoMilledInfo.podrška}</span>
          </p>
          <p className="p-milled-opis">
            Materijali: <span>{lathoMilledInfo.materijali}</span>
          </p>
          <p className="p-milled-opis">
            Obrada: <span>{lathoMilledInfo.obrada}</span>
          </p>
          <p className="p-milled-opis">
            Ivica: <span>{lathoMilledInfo.ivice}</span>
          </p>
        </div>

        <div className="proizvod-grid">
          <div className="grid-img-container" id="grid-one">
            <img src={patern || noIMG} alt={`wide ${ime}`} />
          </div>
          
          <ProizvodForma />
          <div className="grid-img-container" id="grid-three">
            <img src={tech || noIMG} alt={`tech ${ime}`} />
          </div>
          <div className="grid-img-container" id="grid-four">
            <img src={strana || noIMG} alt={`patern ${ime}`} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProizvodMilled;
