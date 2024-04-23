const Latho = ({ lathoMilled, lathoMilledInfo, lathoMove, lathoMoveInfo, noIMG }) => {

  return (
    <div className="latho-page page">
      <div className="head">
        <h3>Latho</h3>
      </div>

      <div className="container latho">
        <p className="kategorija-info latho">
          Vrhunski pločasti materijala od drveta.
        </p>
        <p className="kategorija-info latho">
          Nudimo vam pločaste materijale koji istinski obogaćuju prostor,
          izazivaju oduševljenje i bude vizuelnu i taktilnu radoznalost.
        </p>
        <p className="kategorija-info latho">Made in Italy.</p>

        <p className="kategorija-info latho">
          50 godina iskustva, gde profesionalizam i strast prema poslu čine
          temelj uspeha.
        </p>

        <div className="potkategorije latho">
          <div className="side left">
            <div className="text-part">
              <h3>Milled</h3>
            </div>
            <div className="img-container left" id="move-img-container-l"></div>
          </div>

          <div className="side right">
            <div className="text-part">
              <h3>Move</h3>
            </div>

            <div
              className="img-container right"
              id="move-img-container-r"
            ></div>
          </div>
        </div>
        <div className="grid-proizvoda latho">
          {lathoMilled.map(({ ime, slike }) => (
            <div className="proizvod" key={ime}>
              <div className="img-container">
                <img src={slike.kvadrat} alt={ime} />
              </div>
              <p className="ime-proizvoda">{ime}</p>
              <p className="proizvodjac">{lathoMilledInfo.firma}</p>
            </div>
          ))}
                    {lathoMove.map(({ ime, slike }) => (
            <div className="proizvod" key={ime}>
              <div className="img-container">
                <img src={slike.kvadrat || slike.wide || noIMG} alt={ime} />

              </div>
              <p className="ime-proizvoda">{ime}</p>
              <p className="proizvodjac">{lathoMoveInfo.firma}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latho;
