import React from "react";
import { useLocation } from "react-router-dom";
import ProizvodForma from "../Components/ProizvodForma";

const Proizvod = () => {
  const location = useLocation();
  const { ime, firma, wide, opis, debljine, narrow, patern } =
    location.state.proizvod;

  return (
    <div className="proizvod-page page">
      <div className="proizvod-head">
        <img src={patern} />
        <div className="proizvod-naslov">
          <h3>{ime}</h3>
          <p>{firma}</p>
        </div>
      </div>

      <div className="container">
        <div className="text"><p>{opis}</p>
        <p>{`Dostupne debljine: ${debljine}`}</p></div>
        <div className="proizvod-grid">
          <div className="grid-img-container" id="grid-one">
            <img src={wide} alt={`wide ${ime}`} />
          </div>
          <ProizvodForma />
          <div className="grid-img-container" id="grid-three">
            <img src={narrow} alt={`narrow ${ime}`} />
          </div>
          <div className="grid-img-container" id="grid-four">
            <img src={patern} alt={`patern ${ime}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proizvod;
