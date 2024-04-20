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

const App = () => {
  const slides = [
    {
      url: "src/Assets/slajder/1.jpg",
      text: "Lapitec kamene ploče. Garancija 25 godina.",
    },
    {
      url: "src/Assets/slajder/2.jpg",
      text: "Jedini sertifikovani sintrovani kamen na svetu. 100% prirodan. ",
    },
    {
      url: "src/Assets/slajder/3.jpg",
      text: "Move kolekcija. Jedinstveni pločasti materijali.",
    },
    {
      url: "src/Assets/slajder/4.jpg",
      text: "Puno drvo u svojoj najupečatljivijoj formi.",
    },
  ];


  return (
    <Router>
      <main>
        <Navbar />
        <BackToTopButton/>
        <div className="app">
          <Routes>
            <Route path="/" element={<Pocetna slides={slides} />} />
            <Route path="/proizvodi" element={<Proizvodi />} />
            <Route path="/o-nama" element={<ONama />} />
            <Route path="/b2b" element={<BtoB />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
