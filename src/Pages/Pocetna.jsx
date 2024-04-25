import Slider from "../Components/Slider";
import Carousel from "../Components/Carousel";
import Grid from "../Components/Grid";
import { Link } from "react-router-dom";
import "../Stilovi/Stranica.scss";

const Pocetna = ({ slides }) => {
  return (
    <div className="home page">
      <Slider slides={slides} />
      <div className="container">
        <Carousel />

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
