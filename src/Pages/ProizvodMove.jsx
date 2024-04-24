import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";

const ProizvodMove = ( {noIMG, lathoMoveInfo} ) => {
    const location = useLocation();
    const { ime, kvadrat, wide} = location.state.proizvod;


    return ( <>
    <div className="proizvod-page move page">
      <div className="proizvod-head">
        <img src={kvadrat || wide} />
        <div className="proizvod-naslov">
          <h3>{ime}</h3>
          <p>{lathoMoveInfo.firma}</p>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <p className="p-milled-opis">
            <span>{lathoMoveInfo.info}</span>
          </p>
          <p className="p-milled-opis">
            Debljina: <span>{lathoMoveInfo.debljina}</span>
          </p>
          <p className="p-milled-opis">
            Dimenzije: <span>{lathoMoveInfo.dimenzija}</span>
          </p>
        </div>

        <div className="proizvod-grid">
          <div className="grid-img-container" id="grid-one">
            <img src={wide || noIMG} alt={`wide ${ime}`} />
          </div>
          
          <ProizvodForma />
          <div className="grid-img-container" id="grid-three-move">
            <img src={kvadrat || noIMG} alt={`tech ${ime}`} />
          </div>
        </div>
      </div>
    </div>
    </> );
}
 
export default ProizvodMove;