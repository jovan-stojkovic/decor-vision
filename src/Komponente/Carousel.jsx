import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ lapitec, lathoMilled, lathoMove, noIMG }) => {
  const sviProizvodi = [...lapitec, ...lathoMilled, ...lathoMove];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const random = Math.floor(Math.random() * (sviProizvodi.length - 6));

  const noviNiz = sviProizvodi.slice(random, random + 6);
  console.log(noviNiz);

  console.log(sviProizvodi[random]);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {noviNiz.map(({ patern, ime, index }) => (
          <div key={ime}>
            <img src={patern || noIMG} alt={ime} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
