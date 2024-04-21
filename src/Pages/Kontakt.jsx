import Forma from "../Components/Forma";

const Kontakt = () => {
  return (
    <div className="kontakt-page">
      <div className="kontakt-head head">
        <h3>KONTAKTIRAJTE NAS</h3>
        <div className="separator"></div>
        <p className="opis">Tu smo da pomognemo.</p>
        <div className="arrows"></div>
      </div>

      <div className="kontakt-container">
        <div className="kontakt-info">
          <div className="segment">
            <div className="kontakt-logo one"></div>
            <p className="kontakt-tekst">011 000 00 00</p>
          </div>

          <div className="segment">
            <div className="kontakt-logo two"></div>
            <p className="kontakt-tekst">office@decorvision.rs</p>
          </div>

          <div className="segment">
            <div className="kontakt-logo three"></div>
            <p className="kontakt-tekst">Kralja Milana 22, 11 000 Beograd</p>
          </div>
        </div>
        <Forma />
      </div>
    </div>
  );
};

export default Kontakt;
