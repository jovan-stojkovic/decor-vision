import ProizvodiGrid from "../Components/ProizvodiGrid";
import Head from "../Components/Head";
import "../Stilovi/Stranica.scss";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const Proizvodi = ({ proizvodi }) => {
  const { theme } = useContext(ThemeContext);

  const headline = "PROIZVODI";
  const text = 'Istražite našu ponudu koja će dodati poseban šarm vašem prostoru.'

  return (
    <div className={`page proizvodi ${theme}`}>
      <Head headline={headline} text={text}/>
      <div className="container">
        <ProizvodiGrid proizvodi={proizvodi}/>
      </div>
    </div>
  );
};

export default Proizvodi;
