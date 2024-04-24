import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const Forma = () => {
  const [success, setSuccess] = useState(false);

  const schema = yup.object().shape({
    fullName: yup.string().required("Polje ne sme ostati prazno"),
    email: yup
      .string()
      .email("Molimo Vas unesite ispravnu email adresu")
      .required("Polje ne sme ostati prazno"),
    subject: yup.string().required("Polje ne sme ostati prazno"),
    text: yup.string().required("Polje ne sme ostati prazno"),
    agreement: yup.bool().oneOf([true], "Morate prihvatiti"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(true);
  };

  return (
    <div className="forma kontakt">
      {success ? (
        <div className="success">
          <div className="success-img-cont"></div>
          <p className="p-success">
            Uspešno ste poslali poruku. Naš tim će Vam odgovoriti u najkraćem
            roku!
          </p>
          <button
            className="b-success"
            onClick={() => window.location.reload()}
          >
            Zatvori
          </button>
        </div>
      ) : (
        <>
          <h3>VAŠA DEKORATIVNA AVANTURA POČINJE OVDE</h3>
          <div className="separator"></div>
          <p>
            Radujemo se razmeni ideja o vašem prostoru! Ako želite da oživite
            svoj dom ili poslovni prostor uz naše dekorativne materijale, ili
            imate pitanja u vezi sa našim proizvodima, slobodno nas
            kontaktirajte.
          </p>

          <p>Naš tim je tu da vam pruži personalizovane savete.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="error">{errors.fullName?.message}</p>
            <input
              type="text"
              className="inputi"
              name="fullName"
              id="name"
              placeholder="Full Name*"
              {...register("fullName")}
            />
            <p className="error">{errors.email?.message}</p>
            <input
              type="text"
              className="inputi"
              name="email"
              id="email"
              placeholder="Email*"
              {...register("email")}
            />
            <p className="error">{errors.subject?.message}</p>
            <input
              type="text"
              className="inputi"
              name="subject"
              id="subject"
              placeholder="Subject*"
              {...register("subject")}
            />
            <p className="error">{errors.text?.message}</p>
            <textarea
              type="text"
              className="inputi"
              name="text"
              id="message"
              placeholder="Message*"
              {...register("text")}
            />

            <p className="saglasnost">
              Saglasan sam sa svim pojedinostima navedenim o korišćenju i
              upotrebi ovog sajta, politikom privatnosti i ostalim poslovnim
              <Link
                id="pravila-url"
                to="/uslovi-koriscenja"
                target="_blank"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {" "}
                pravilima
              </Link>
              , kao potrebnim uslovima za našu dalju komunikaciju i saradnju.
              Ovim putem to i potvrđujem.
            </p>

            <input type="checkbox" id="checkbox" {...register("agreement")} />
            <label htmlFor="checkbox" className="checkbox-label">
              SLAŽEM SE SA OVDE NAVEDENIM*
            </label>
            <p className="error check">{errors.agreement?.message}</p>
            <button type="submit">POŠALJI</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Forma;
