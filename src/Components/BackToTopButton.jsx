import { useEffect, useState } from "react";
import "../Stilovi/Component.scss";


const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button onClick={scrollUp} className="to-the-top-button">
          <img
            src="/slike/icons/arrow-up-circle.svg"
            alt="arrow-up"
          />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
