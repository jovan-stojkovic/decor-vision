import "./Styles.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pocetna from "./Pages/Pocetna";
import Proizvodi from "./Pages/Proizvodi";
import ONama from "./Pages/ONama";
import BtoB from "./Pages/BtoB";
import Kontakt from "./Pages/Kontakt";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />

        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/b2b" element={<BtoB />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
