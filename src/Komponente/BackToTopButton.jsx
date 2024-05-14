import "../Stilovi/Komponente.scss";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const { theme } = useContext(ThemeContext);

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
        <button onClick={scrollUp} className={`to-the-top-button ${theme}`}>
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
