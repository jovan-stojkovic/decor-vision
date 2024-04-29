import Forma from "../Components/Forma";
import Head from "../Components/Head";
import KontaktInfo from "../Components/KontaktInfo";
import "../Stilovi/Stranica.scss";
import "../Stilovi/Component.scss";
import "../Stilovi/StranicaDark.scss";
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
        <Forma />
      </div>
    </div>
  );
};

export default Kontakt;
