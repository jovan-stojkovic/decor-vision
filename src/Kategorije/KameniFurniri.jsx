import "../Stilovi/Stranica.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HeadProizvod from "../Komponente/HeadProizvod";
import ThemeContext from "../Helpers/ThemeContext";

const KameniFurniri = () => {
  const { theme } = useContext(ThemeContext);

  const headline = "KAMENI FURNIRI";
  return (
    <div className={`kameni-furniri page ${theme}`}>
      <HeadProizvod headline={headline} />

      <div className="container">
        <h2 className="kategorija-info">Slate-Lite</h2>

        <p className="kategorija-info">
          Sa velikim zadovoljstvom Vam predstavljamo kamene furnire našeg
          partnera iz Nemačke, kompanije R&D GmbH. Vrhunski dizajn i nemački
          kvalitet daće vašem prostoru novu dimenziju u kojoj će svi uživati!
        </p>
        <h2 className="kategorija-info">
          Brzo i lako do savršenog kamenog iskustva
        </h2>
        <p className="kategorija-info">
          Sa Slate-Lite-om, birate kvalitetan proizvod pouzdanog proizvođača
          koji je temeljno testiran u svim svojim komponentama - kako u internoj
          laboratoriji za ispitivanje proizvođača, tako i od strane eksternih
          instituta za ispitivanje.
        </p>

        <p className="kategorija-info">
          Zahvaljujući jedinstvenim svojstvima Slate-Lite-a, kao što su mala
          ukupna debljina od samo nekoliko milimetara i mala težina, ovi kameni
          furniri se mogu veoma lako i praktično{" "}
          <Link
            target="_blank"
            to={
              "https://www.slate-lite.com/eng/c/processing.html-14f557779635419cbe6411980d5d2216"
            }
          >
            obrađivati
          </Link>{" "}
          - bez obzira da li ste profesionalac ili ambiciozan amater.
        </p>

        <h2 className="kategorija-info">Pravi proizvod za svaki projekat</h2>

        <p className="kategorija-info">
          Otkrijte ukupno preko 70 dekora sa pet različitih vrsta kamena: Ne
          nudimo vam samo tanke ploče od škriljaca, već i dekore od tankih
          škriljaca od krečnjaka, peščara, pa čak i mermera!
        </p>

        <p className="kategorija-info">
          Lako pregledajte naš veliki izbor proizvoda i pronađite svoj novi
          omiljeni dizajn od pravog prirodnog kamena, nadamo se da ćete uživati
          u svom putovanju kroz svet{" "}
          <Link
            target="_blank"
            to="https://www.slate-lite.com/eng/c/products.html"
          >
            Slate-Lite
          </Link>
          -a.
        </p>

        <p className="kategorija-info">
          Slate-Lite ima površinu od 100% prirodnog kamena i zahvaljujući
          podlozi od fiberglasa, izuzetno je robustan i pogodan za unutrašnju i
          spoljašnju upotrebu. Njegova tanka ukupna debljina od samo oko 1,5 mm
          ga takođe čini izuzetno laganim, lakim za rad na skoro svakoj površini
          i može se položiti čak i po krivinama ako je potrebno.
        </p>

        <p className="kategorija-info">
          Koristite Slate-Lite kamene furnire i u zatvorenom i na otvorenom za
          oblaganje zidova, podova ili kao pozadinu u vašoj kuhinji ili
          kupatulu.
        </p>
        <p className="kategorija-info">
          Ključne činjenice za Slate-Lite:
          <ul>
            <li>Površina od 100% prirodnog kamena</li>
            <li>Ukupna debljina oko 1,5 mm</li>
            <li>Težina približno 1,5 kg/m²</li>
            <li>Zadnja strana: fiberglas</li>
            <li>Tačnost veličine: 1-2 mm</li>
            <li> Maksimalna temperatura: 120 °C</li>
            <li> Radijus savijanja: približno 5 cm</li>
          </ul>
        </p>
        <p className="kategorija-info">
          Slate-Lite ima široke mogućnost primene, a neke od njih su:
          <ul>
            <li> Unutrašnji zidovi</li>
            <li> Spoljašnji zidovi</li>
            <li> Mokri prostori (kada, tuš, sauna, bazen)</li>
            <li> Podovi, terase</li>
            <li> Kuhinje</li>
            <li> Fasade, krovovi</li>
            <li> Izrada nameštaja</li>
            <li> Kamini…</li>
          </ul>
        </p>
        <p className="kategorija-info">
          I najlepše za kraj – kod nas ovaj proizvod možete nabaviti po potpuno
          istim cenama kao na sajtu{" "}
          <Link
            target="_blank"
            to="https://www.slate-lite.com/eng/c/products.html"
          >
            proizvođača
          </Link>
          !
        </p>
        <p className="kategorija-info">
          *Plaćanje se vrši u RSD po prodajnom kursu OTP banke.
        </p>
      </div>
    </div>
  );
};

export default KameniFurniri;
