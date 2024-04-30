import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CarouselLinks = ({ lapitec, lathoMilled, lathoMove, noIMG }) => {
  const sviProizvodi = [...lapitec, ...lathoMilled, ...lathoMove];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const randomStartIndex = Math.floor(Math.random() * (sviProizvodi.length - 6));
  console.log(randomStartIndex);
  console.log(sviProizvodi);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i}>
            <Link
              to={`/proizvodi/${sviProizvodi[randomStartIndex + i].proizvodjac}/${sviProizvodi[randomStartIndex + i].firma}/${sviProizvodi[randomStartIndex + i].ime}`}
            >
              <img src={sviProizvodi[randomStartIndex + i].patern || noIMG} alt={`Photo${i + 1}`} />
              <p>{sviProizvodi[randomStartIndex + i].ime}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLinks;
