import "./Stilovi/App.scss";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pocetna from "./Stranice/Pocetna";
import Proizvodi from "./Stranice/Proizvodi";
import ONama from "./Stranice/ONama";
import BtoB from "./Stranice/BtoB";
import Kontakt from "./Stranice/Kontakt";
import UsloviKoriscenja from "./Stranice/UsloviKoriscenja";

import Navbar from "./Komponente/Navbar";
import Footer from "./Komponente/Footer";
import BackToTopButton from "./Komponente/BackToTopButton";
import Lapitec from "./Kategorije/Lapitec";
import KameniFurniri from "./Kategorije/KameniFurniri";
import Latho from "./Kategorije/Latho";
import Tapete from "./Kategorije/Tapete";
import Kvarc from "./Kategorije/Kvarc";
import ProizvodLapitec from "./Stranice/ProizvodLapitec";
import ProizvodMove from "./Stranice/ProizvodMove";
import ProizvodMilled from "./Stranice/ProizvodMilled";
import ProizvodKvarc from "./Stranice/ProizvodKvarc";

import ThemeContext from "./Helpers/ThemeContext";
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
  kvarc,
} from "./Helpers/Helper";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIMG, setSelectedIMG] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

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
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <main className={theme}>
          <div className="nav-background"></div>
          <Navbar showSidebar={showSidebar} handleClick={handleClick} />
          <BackToTopButton />
          <div className="app">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Pocetna
                    slides={slides}
                    lapitec={lapitec}
                    lathoMilled={lathoMilled}
                    lathoMove={lathoMove}
                    noIMG={noIMG}
                  />
                }
              />
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
                path="/proizvodi/:proizvodjac/:firma/:ime"
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

              <Route
                path="/proizvodi/Kvarc"
                element={<Kvarc kvarc={kvarc} noIMG={noIMG} />}
              />

              <Route
                path="/proizvodi/kvarc/:ime"
                element={
                  <ProizvodKvarc
                    noIMG={noIMG}
                    isOpen={isOpen}
                    openIMG={openIMG}
                    selectedIMG={selectedIMG}
                    closeIMG={closeIMG}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </main>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
