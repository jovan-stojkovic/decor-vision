import { Link } from "react-router-dom";

const BtoBGrid = () => {
  return (
    <div className="btob-grid">
      <Link
        to="https://www.latho.it/en/"
        className="btob-grid-img one"
        target="_blank"
      />
      <Link
        to="https://www.lapitec.com/"
        className="btob-grid-img two"
        target="_blank"
      />
      <Link
        to="https://www.slate-lite.com/eng/"
        className="btob-grid-img three"
        target="_blank"
      />
      <Link
        to="https://www.decoprintwallcoverings.com/"
        className="btob-grid-img four"
        target="_blank"
      />
    </div>
  );
};

export default BtoBGrid;
