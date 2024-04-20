import { Link } from "react-router-dom";

const ProizvodiGrid = ({ proizvodi }) => {
  return (
    <>
      <div className="proizvodi-grid">
        {proizvodi.map((item, index) => (
          <div className="jedan-proizvod">
            <Link key={index} to={`/proizvodi/${item.text}`}>
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
