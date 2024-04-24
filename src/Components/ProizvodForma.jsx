import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const ProizvodForma = () => {
  const [success, setSuccess] = useState(false);
  const schema = yup.object().shape({
    ime: yup.string().required("Polje ne sme ostati prazno"),
    email: yup.string().email("Molimo Vas unesite ispravnu email adresu").required("Polje ne sme ostati prazno"),
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
    <div className="forma proizvod" id="grid-two">
      {success ? (
        <div className="proizvod-success">
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
          <h3>POŠALJI UPIT ZA OVAJ PROIZVOD</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="error">{errors.ime?.message}</p>
            <input
              type="text"
              className="inputi"
              name="ime"
              id="ime"
              placeholder="Ime i Prezime*"
              {...register("ime")}
            />

            <p className="error">{errors.email?.message}</p>
            <input
              type="text"
              className="inputi"
              name="email"
              id="email"
              placeholder="Email adresa*"
              {...register("email")}
            />

            <p className="error">{errors.text?.message}</p>
            <textarea
              type="text"
              className="inputi"
              name="text"
              id="message"
              placeholder="Tekst upita*"
              {...register("text")}
            ></textarea>

            <p className="saglasnost">
              Saglasan sam sa svim pojedinostima navedenim o korišćenju i
              upotrebi ovog sajta, politikom privatnosti i ostalim poslovnim
              pravilima, kao potrebnim uslovima za našu dalju komunikaciju i
              saradnju. Ovim putem to i potvrđujem.
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

export default ProizvodForma;
