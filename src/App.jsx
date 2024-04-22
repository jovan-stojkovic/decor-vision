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
import KameniFurnir from "./Kategorije/KameniFurnir";
import Plocice from "./Kategorije/Plocice";
import Parket from "./Kategorije/Parket";
import DrveniPaneli from "./Kategorije/DrveniPaneli";
import Tapete from "./Kategorije/Tapete";
import Stolovi from "./Kategorije/Stolovi";
import DrveniFurniri from "./Kategorije/DrveniFurniri";
import {musa, essenza, slides, proizvodi} from "./Helper"



const App = () => {
  

  

  return (
    <Router>
      <main>
        <Navbar />
        <BackToTopButton />
        <div className="app">
          <Routes>
            <Route path="/" element={<Pocetna slides={slides} />} />
            <Route
              path="/proizvodi"
              element={<Proizvodi proizvodi={proizvodi}  />}
            />
            <Route path="/o-nama" element={<ONama />} />
            <Route path="/b2b" element={<BtoB />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/uslovi-koriscenja" element={<UsloviKoriscenja />} />

            <Route path="/proizvodi/Lapitec" element={<Lapitec musa={musa} essenza={essenza}/>} />
            <Route path="/proizvodi/Kvarc" element={<Kvarc />} />
            <Route
              path="/proizvodi/Porcelanske ploče"
              element={<PorcelanskePloce />}
            />
            <Route path="/proizvodi/Kameni furnir" element={<KameniFurnir />} />
            <Route path="/proizvodi/Pločice" element={<Plocice />} />
            <Route path="/proizvodi/Parket" element={<Parket />} />
            <Route path="/proizvodi/Drveni paneli" element={<DrveniPaneli />} />
            <Route
              path="/proizvodi/Drveni furniri"
              element={<DrveniFurniri />}
            />
            <Route path="/proizvodi/Tapete" element={<Tapete />} />
            <Route path="/proizvodi/Stolovi" element={<Stolovi />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
