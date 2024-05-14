import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Slider = ({ slides }) => {
  return (
    <>
      <div className="slide-container">
        <Slide>
          {slides.map((image, index) => (
            <div key={index}>
              <div id="slide" style={{ backgroundImage: `url(${image.url})` }}>
                <p className="caption">{image.text}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Slider;
