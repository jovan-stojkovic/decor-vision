import { useState, useEffect } from "react";
import ProizvodiGrid from "../Components/ProizvodiGrid";

const Proizvodi = ({ proizvodi }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50)

    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="proizvodi-page page">
      <div className="proizvodi-head head">
        <h3 className={isVisible ? "visible" : ""}>PROIZVODI</h3>
        <div className="separator"></div>
        <p>Istražite našu ponudu koja će dodati poseban šarm vašem prostoru.</p>
        <div className="arrows">
        <img src="/src/Assets/logos/down-double.svg"/>
        </div>
      </div>

      <div className="proizvodi-container container">
        <ProizvodiGrid proizvodi={proizvodi} />
      </div>
    </div>
  );
};

export default Proizvodi;
