import "../Stilovi/Stranica.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HeadProizvod from "../Komponente/HeadProizvod";
import ThemeContext from "../Helpers/ThemeContext";

const Kvarc = ({ kvarc, noIMG }) => {
  const { theme } = useContext(ThemeContext);
  const headline = "KVARC";

  return (
    <div className={`kvarc page ${theme}`}>
      <HeadProizvod headline={headline} />

      <div className="container">
        <p className="kvarc-info">
          Kvarc je sve zastuljeniji zbog svoje izdržljivosti, estetike i
          praktičnosti. Kvarc se sastoji od prirodnog minerala kvarca koji se
          kombinuje sa polimerima i pigmentima kako bi se stvorila čvrsta i
          otporna površina.
        </p>
        <div className="ikonice-grid">
          <div className="ikonica-cont">
            <div className="ikonica-img-cont one"></div>
            <p className="info-ikonice kvarc">PRIRODNA LEPOTA</p>
            <p className="kvarc">
              Kombinacija boja i lepote prirodnog kvarca uz koriščenje
              najsavremenijih tehnologija.
            </p>
          </div>
          <div className="ikonica-cont">
            <div className="ikonica-img-cont two"></div>
            <p className="info-ikonice kvarc">ECO-FRIENDLY tehnologija</p>
            <p className="kvarc">
              Najsavremenija tehnologija pretvara prirodne resurse u sjajne
              proizvode.
            </p>
          </div>
          <div className="ikonica-cont">
            <div className="ikonica-img-cont two"></div>
            <p className="info-ikonice kvarc">HIGIJENA</p>
            <p className="kvarc">
              Neporozna struktura nedozvoljava mikroorganizmima da se
              razmnožavaju.
            </p>
          </div>
          <div className="ikonica-cont">
            <div className="ikonica-img-cont three"></div>
            <p className="info-ikonice kvarc">LAKO ČIŠĆENJE</p>
            <p className="kvarc">
              Neporozna površina obezbeđuje savršenu otpornost na brojne mrlje
              kao što su čaj, kafa, limun, sirće, voćni sokovi i kozmetika.
            </p>
          </div>
          <div className="ikonica-cont">
            <div className="ikonica-img-cont four"></div>
            <p className="info-ikonice kvarc">OTPORNOST NA GREBANJE</p>
            <p className="kvarc">
              Veoma je otporan na grebanje i habanje, jer je kvarc jedan od
              najtvrđih minerala na zemlji.
            </p>
          </div>
          <div className="ikonica-cont">
            <div className="ikonica-img-cont three"></div>
            <p className="info-ikonice kvarc">OTPORNOST NA UDARCE</p>
            <p className="kvarc">
              Čvrsta i fleksibilna struktura, omogućena naprednom tehnologijom
              proizvodnje, čini ga izuzetno otpornim na udarce.
            </p>
          </div>
        </div>
        <div className="grid-proizvoda kvarc">
          {kvarc.map(
            ({ ime, index, slikaJedan, slikaDva, slikaTri, slikaCetiri }) => (
              <>
                <div className="proizvod" key={ime}>
                  <Link
                    to={`/proizvodi/kvarc/${ime}`}
                    state={{
                      proizvod: {
                        ime,
                        index,
                        slikaJedan,
                        slikaDva,
                        slikaTri,
                        slikaCetiri,
                      },
                    }}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <div className="img-container">
                      <img src={slikaJedan || noIMG} alt={ime} />
                    </div>
                  </Link>
                  <p className="ime-proizvoda">{ime}</p>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Kvarc;
