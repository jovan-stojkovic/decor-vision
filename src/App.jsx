import "./Stilovi/Styles.scss";
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
import KameniFurniri from "./Kategorije/KameniFurniri";
import Latho from "./Kategorije/Latho";
import Tapete from "./Kategorije/Tapete";
import { useState, useEffect } from "react";

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
} from "./Helpers/Helper";
import ProizvodLapitec from "./Pages/ProizvodLapitec";
import ProizvodMilled from "./Pages/ProizvodMilled";
import ProizvodMove from "./Pages/ProizvodMove";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleClick = () => {
    setShowSidebar(!showSidebar);
    console.log("hello");
    console.log(showSidebar);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIMG, setSelectedIMG] = useState(null);

  const openIMG = (img) => {
    setSelectedIMG(img);
    setIsOpen(true);
  };

  const closeIMG = () => {
    setSelectedIMG(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeIMG();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Router>
      <main>
        <div className="nav-background"></div>
        <Navbar showSidebar={showSidebar} handleClick={handleClick} />
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
              element={
                <ProizvodLapitec
                  noIMG={noIMG}
                  isOpen={isOpen}
                  openIMG={openIMG}
                  selectedIMG={selectedIMG}
                  closeIMG={closeIMG}
                />
              }
            />

            <Route
              path="/proizvodi/Latho"
              element={
                <Latho
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
                  isOpen={isOpen}
                  openIMG={openIMG}
                  selectedIMG={selectedIMG}
                  closeIMG={closeIMG}
                />
              }
            />

            <Route
              path="/proizvodi/Latho/Move/:ime"
              element={
                <ProizvodMove
                  lathoMoveInfo={lathoMoveInfo}
                  noIMG={noIMG}
                  isOpen={isOpen}
                  openIMG={openIMG}
                  selectedIMG={selectedIMG}
                  closeIMG={closeIMG}
                />
              }
            />

            <Route
              path="/proizvodi/Kameni furniri"
              element={<KameniFurniri />}
            />
            <Route
              path="/proizvodi/Tapete"
              element={<Tapete tapete={tapete} />}
            />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
