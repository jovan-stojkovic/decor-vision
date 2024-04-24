import { Link } from "react-router-dom";

const Tapete = ({tapete}) => {
  return (
    <div className="tapete-page page">
      <div className="head">
        <h3>Tapete</h3>
      </div>

      <div className="container">
        <p className="kategorija-info">Decoprint</p>

        <p className="kategorija-info">
          Predstavljamo Vam inovativne tapete premium kvaliteta i jedinstvenog
          dizajna koje su proizvedene u Belgiji. Vrhunske, izdržljive i
          proizvedene najnovijom tehnologijom uz poštovanje ekoloških standarda,
          čemu se naročito posvećuje pažnja. Osnovna sirovina papira je celuloza
          dobijena od drveta iz sertifikovanih šuma kojima se pažljivo i
          odgovorno gazduje, a korišćena mastila su na vodenoj bazi. Prodaja u
          preko 50 zemalja širom sveta i zadovoljni kupci su najbolja preporuka
          za{" "}
          <Link target="_blank" to="https://www.decoprintwallcoverings.com/">
            Decoprint
          </Link>
          , a mi smo se potrudili da i kupcima na našem tržištu ove vrhunske
          tapete budu dostupne.
        </p>
        <p className="kategorija-info">
            <Link target="_blank" to="https://www.decoprintwallcoverings.com/en/collections">Uživajte</Link>
        </p>
        
        <div className="grid-proizvoda tapete">
          {tapete.map(({ ime, slika, url }) => (
            <div className="proizvod" key={ime} id="tapeta">
                <Link target="_blank" to={url}><div className="img-container">
                <img src={slika} alt={ime} />
              </div></Link>
              <p className="ime-proizvoda">{ime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tapete;
