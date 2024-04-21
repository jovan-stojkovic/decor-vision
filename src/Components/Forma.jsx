const Forma = () => {
  return (
    <div className="forma">
      <h3>VAŠA DEKORATIVNA AVANTURA POČINJE OVDE</h3>
      <div className="separator"></div>
      <p>
        Radujemo se razmeni ideja o vašem prostoru! Ako želite da oživite svoj
        dom ili poslovni prostor uz naše dekorativne materijale, ili imate
        pitanja u vezi sa našim proizvodima, slobodno nas kontaktirajte.
      </p>

      <p>Naš tim je tu da vam pruži personalizovane savete.</p>

      <form>
        <input
          type="text"
          className="inputi"
          name="name"
          id="name"
          placeholder="Full Name*"
        />
        <input
          type="text"
          className="inputi"
          name="email"
          id="email"
          placeholder="Email*"
        />
        <input
          type="text"
          className="inputi"
          name="subject"
          id="subject"
          placeholder="Subject*"
        />
        <textarea
          type="text"
          className="inputi"
          name="message"
          id="message"
          placeholder="Message*"
        />

        <p className="desc">
          Saglasan sam sa svim pojedinostima navedenim o korišćenju i upotrebi
          ovog sajta, politikom privatnosti i ostalim poslovnim pravilima, kao
          potrebnim uslovima za našu dalju komunikaciju i saradnju. Ovim putem
          to i potvrđujem.
        </p>

        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">SLAŽEM SE SA OVDE NAVEDENIM*</label>
        <button type="submit">POŠALJI</button>
      </form>
    </div>
  );
};

export default Forma;
