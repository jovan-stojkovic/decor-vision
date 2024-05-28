const KontaktInfo = () => {

  const broj = '069 1000501'
  const email = "office@decorvision.rs"
  const adresa = "Kralja Milana 22, 11 000 Beograd"

  return (
    <div className="kontakt-info">
      <div className="segment">
        <div className="kontakt-logo one"></div>
        <p className="kontakt-tekst">{broj}</p>
      </div>

      <div className="segment">
        <div className="kontakt-logo two"></div>
        <p className="kontakt-tekst">{email}</p>
      </div>

      <div className="segment">
        <div className="kontakt-logo three"></div>
        <p className="kontakt-tekst">{adresa}</p>
      </div>
    </div>
  );
};

export default KontaktInfo;
