import ProizvodiGrid from "../Components/ProizvodiGrid";
import Head from "../Components/Head";
import "../Stilovi/Stranica.scss";

const Proizvodi = ({ proizvodi }) => {
  const headline = "PROIZVODI";
  const text = 'Istražite našu ponudu koja će dodati poseban šarm vašem prostoru.'

  return (
    <div className="page proizvodi">
      <Head headline={headline} text={text}/>
      <div className="container">
        <ProizvodiGrid proizvodi={proizvodi}/>
      </div>
    </div>
  );
};

export default Proizvodi;
