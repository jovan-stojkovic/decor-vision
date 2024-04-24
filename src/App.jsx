import "./Styles.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pocetna from "./Pages/Pocetna";
import Proizvodi from "./Pages/Proizvodi";
import ONama from "./Pages/ONama";
import BtoB from "./Pages/BtoB";
import Kontakt from "./Pages/Kontakt";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";
import UsloviKoriscenja from "./Pages/UsloviKoriscenja";
import Lapitec from "./Kategorije/Lapitec";
import Kvarc from "./Kategorije/Kvarc";
import PorcelanskePloce from "./Kategorije/PorcelanskePloce";
import KameniFurniri from "./Kategorije/KameniFurniri";
import Plocice from "./Kategorije/Plocice";
import Parket from "./Kategorije/Parket";
import DrveniPaneli from "./Kategorije/DrveniPaneli";
import Tapete from "./Kategorije/Tapete";
import Stolovi from "./Kategorije/Stolovi";
import DrveniFurniri from "./Kategorije/DrveniFurniri";
import {
  noIMG,
  lapitec,
  slides,
  proizvodi,
  lathoMilled,
  lathoMilledInfo,
  lathoMove,
  lathoMoveInfo,
  tapete,
} from "./Helper";
import ProizvodLapitec from "./Pages/ProizvodLapitec";
import ProizvodMilled from "./Pages/ProizvodMilled";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <BackToTopButton />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Pocetna slides={slides} />} />
            <Route
              path="/proizvodi"
              element={<Proizvodi proizvodi={proizvodi} />}
            />
            <Route path="/o-nama" element={<ONama />} />
            <Route path="/b2b" element={<BtoB />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/uslovi-koriscenja" element={<UsloviKoriscenja />} />

            <Route
              path="/proizvodi/Lapitec"
              element={<Lapitec lapitec={lapitec} noIMG={noIMG} />}
            />

            <Route
              path="/proizvodi/Lapitec/:firma/:ime"
              element={<ProizvodLapitec noIMG={noIMG} />}
            />

            <Route
              path="/proizvodi/Kvarc"
              element={
                <Kvarc
                  lathoMilled={lathoMilled}
                  lathoMilledInfo={lathoMilledInfo}
                  lathoMove={lathoMove}
                  lathoMoveInfo={lathoMoveInfo}
                  noIMG={noIMG}
                />
              }
            />

            <Route
              path="/proizvodi/Latho/Milled/:ime"
              element={
                <ProizvodMilled
                  lathoMilledInfo={lathoMilledInfo}
                  noIMG={noIMG}
                />
              }
            />

            <Route
              path="/proizvodi/Porcelanske ploče"
              element={<PorcelanskePloce />}
            />
            <Route
              path="/proizvodi/Kameni furniri"
              element={<KameniFurniri />}
            />
            <Route path="/proizvodi/Pločice" element={<Plocice />} />
            <Route path="/proizvodi/Parket" element={<Parket />} />
            <Route path="/proizvodi/Drveni paneli" element={<DrveniPaneli />} />
            <Route
              path="/proizvodi/Drveni furniri"
              element={<DrveniFurniri />}
            />
            <Route
              path="/proizvodi/Tapete"
              element={<Tapete tapete={tapete} />}
            />
            <Route path="/proizvodi/Stolovi" element={<Stolovi />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
