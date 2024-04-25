import { useState, useEffect } from "react";

const Head = ({headline, text}) => {

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
        <h3>{headline}</h3>
        <div className="separator"></div>
        <p>{text}</p>
        <div className="arrows">
          <img src="public/slike/icons/down-double.svg"/>
        </div>
      </div>
    </div>
  );
};

export default Head;
