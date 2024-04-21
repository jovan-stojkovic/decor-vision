import Slider from "../Components/Slider";
import Carousel from "../Components/Carousel";
import Grid from "../Components/Grid";
import { Link } from "react-router-dom";

const Pocetna = ({ slides }) => {
  return (
    <div className="home-page">
      <Slider slides={slides} />
      <div className="home-page-container">
        <Carousel />

        <Link
          to="https://www.instagram.com/decorvision.rs/?hl=en"
          target="blank"
        >
          <div className="insta-img-container"></div>
          @decorvision.rs
        </Link>

        <Grid />

        <div className="home-page-text">
          <h3>
            UZ PRIRODNU ELEGANCIJU NAŠIH PROIZVODE DEKORIŠITE INSPIRATIVNO VAŠ
            PROSTOR
          </h3>
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
