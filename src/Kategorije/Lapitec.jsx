const Lapitec = ({ musa, essenza }) => {
  return (
    <>
      {musa.map((item, index) => (
        <div className="eto">
          <p key={index}>{item.ime}</p>
          <img src={item.slike.wide} alt={item.ime} />
        </div>
      ))}

{essenza.map((item, index) => (
        <div className="opet">
          <p key={index}>{item.ime}</p>
          <img src={item.slike.wide} alt={item.ime} />
        </div>
      ))}
    </>
  );
};

export default Lapitec;
