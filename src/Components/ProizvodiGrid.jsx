import { Link } from "react-router-dom";

const ProizvodiGrid = ({ proizvodi }) => {
  return (
    <>
      <div className="proizvodi-grid">
        {proizvodi.map(({ text, url }, index) => (
          <div className="jedan-proizvod" key={index}>
            <Link
              to={`/proizvodi/${text}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div
                className="proizvod-img-container"
                style={{ backgroundImage: `url(${encodeURI(url)})` }}
              ></div>
            </Link>
            <p className="proizvod-naziv">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProizvodiGrid;
