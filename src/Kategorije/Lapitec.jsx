const Lapitec = ({ lapitec }) => {
  return (
    <div className="lapitec-page page">
      {/* {lapitec.map((item, index) => (
            <div className="eto">
              <h1>{item.firma}</h1>
              <p key={index}>{item.ime}</p>
              <img src={item.slike.narrow} alt={item.ime} />
            </div>
          ))} */}

      <div className="head">
        <h3>Lapitec</h3>
      </div>

      <div className="container lapitec">
        <p className="kategorija-info lapitec">
          Lapitec kolekcije prate najnovije trendove dizajna i proizvode se
          korišćenjem najsavremenijih tehnologija. Sa izuzetnim dizajnom i
          dekorativnim potencijalom, ove kolekcije nude zadivljujuću estetiku,
          stvarajući dinamičan moderan izgled i generišu toplinu i emocije.
        </p>

        <div className="potkategorije lapitec">
          <div className="side left">
            <div className="text-part">
              <h3>Musa</h3>
              <p className="desc">Lagano, svetlo, elegantno.</p>
              <p>
                Musa kolekcija se odlikuje dugim žilama koje prolaze kroz
                debljinu svake ploče, ukrštajući jedna drugu. Visoka
                tehnologija, moderan dizajn i lagane, eterične nijanse. Ova
                kolekcija slavi večnu eleganciju italijanske umetnosti.
              </p>
            </div>
            <div className="img-container left"></div>
          </div>

          <div className="side right">
            <div className="text-part">
              <h3>Essenza</h3>
              <p className="desc">Linearno, jednobojno, teksturirano.</p>
              <p>
                Essenza kolekcija prikazuje snagu zemlje, kombinovanu sa
                italijanskom tradicijom i stilom, izražavajući sve nijanse
                prirodnih pejzaža kroz dostupne lagane boje.
              </p>
            </div>

            <div className="img-container right"></div>
          </div>
        </div>

        <div className="svi-proizvodi-kategorije lapitec"></div>
      </div>
    </div>
  );
};

export default Lapitec;
