import { Link } from "react-router-dom";
import { useContext } from "react";
import Slider from "../Komponente/Slider";
import Grid from "../Komponente/Grid";
import ThemeContext from "../Helpers/ThemeContext";
import Carousel from "../Komponente/Carousel";

const Pocetna = ({ slides, lapitec, lathoMilled, lathoMove, noIMG }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home page ${theme}`}>
      <Slider slides={slides} />
      <div className="container">
        <Carousel lapitec={lapitec} lathoMilled={lathoMilled} lathoMove={lathoMove} noIMG={noIMG}/>

        <div className="insta-link-cont">
          <div className="insta-img-container"></div>
          <Link
            to="https://www.instagram.com/decorvision.rs/?hl=en"
            target="_blank"
          >
            @decorvision.rs
          </Link>
        </div>

        <Grid />

        <div className="dole">
          <h2>
            UZ PRIRODNU ELEGANCIJU NAŠIH PROIZVODA DEKORIŠITE INSPIRATIVNO VAŠ
            PROSTOR
          </h2>
          <div className="separator"></div>
          <p>
            Uživajte u našoj bogatoj ponudi za dekoraciju prostora. Uđite u
            svet, gde čak i najmanji detalji prave velike razlike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pocetna;
