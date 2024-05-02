import Forma from "../Components/Forma";
import Head from "../Components/Head";
import KontaktInfo from "../Components/KontaktInfo";
import "../Stilovi/Stranica.scss";
import "../Stilovi/Component.scss";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";


const Kontakt = () => {
  const { theme } = useContext(ThemeContext);
  const headline = "KONTAKTIRAJTE NAS";
  const text = "Tu smo da pomognemo.";
  return (
    <div className={`kontakt page ${theme}`}>
      <Head headline={headline} text={text} />

      <div className="container">
        <KontaktInfo />
        <h2>VAŠA DEKORATIVNA AVANTURA POČINJE OVDE</h2>
          <div className="separator"></div>
          <p className="p-kontakt">
            Radujemo se razmeni ideja o vašem prostoru! Ako želite da oživite
            svoj dom ili poslovni prostor uz naše dekorativne materijale, ili
            imate pitanja u vezi sa našim proizvodima, slobodno nas
            kontaktirajte.
          </p>

          <p>Naš tim je tu da vam pruži personalizovane savete.</p>
        <Forma />
      </div>
    </div>
  );
};

export default Kontakt;
