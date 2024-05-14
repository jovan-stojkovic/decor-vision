import { useState, useEffect } from "react";

const Head = ({ headline, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="head">
      <div className={`head-cont ${isVisible ? "visible" : ""}`}>
        <h1>{headline}</h1>
        <div className="separator"></div>
        <h3 className="head-text">{text}</h3>
        <div className="arrows">
          <img src="/slike/icons/down-double.svg" />
        </div>
      </div>
    </div>
  );
};

export default Head;
