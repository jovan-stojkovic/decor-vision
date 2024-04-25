import { Link } from "react-router-dom";

const ProizvodiGrid = ({ proizvodi }) => {
  return (
    <>
      <div className="proizvodi-grid">
        {proizvodi.map((item, index) => (
          <div className="jedan-proizvod" key={index}>
            <Link to={`/proizvodi/${item.text}`} 
            onClick={() => {
              window.scrollTo(0,0)
            }}
            >
              <div
                className="proizvod-img-cont"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
            </Link>
            <p className="proizvod-naziv">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProizvodiGrid;
