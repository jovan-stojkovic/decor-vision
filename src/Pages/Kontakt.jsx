import Forma from "../Components/Forma";
import Head from "../Components/Head";

const Kontakt = () => {
  const headline = "KONTAKTIRAJTE NAS";
  const text = "Tu smo da pomognemo.";
  return (
    <div className="kontakt-page page">
      <Head headline={headline} text={text} />

      <div className="kontakt-container container">
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
