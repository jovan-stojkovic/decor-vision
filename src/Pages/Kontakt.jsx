import Forma from "../Components/Forma";
import Head from "../Components/Head";
import KontaktInfo from "../Components/KontaktInfo";
import "../Stilovi/Stranica.scss";
import "../Stilovi/Component.scss";



const Kontakt = () => {
  const headline = "KONTAKTIRAJTE NAS";
  const text = "Tu smo da pomognemo.";
  return (
    <div className="kontakt page">
      <Head headline={headline} text={text} />

      <div className="container">
        <KontaktInfo />
        <Forma />
      </div>
    </div>
  );
};

export default Kontakt;
