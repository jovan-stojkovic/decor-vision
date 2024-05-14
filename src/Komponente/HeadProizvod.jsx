import { useState, useEffect } from "react";

const HeadProizvod = ({ headline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="head proizvod">
      <div className={`head-cont ${isVisible ? "visible" : ""}`}>
        <h1>{headline}</h1>
        <div className="arrows">
          <img src="/slike/icons/down-double.svg" />
        </div>
      </div>
    </div>
  );
};

export default HeadProizvod;
