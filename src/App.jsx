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

  const proizvodi = [
    {
      url: "https://www.lapitec.com/ContentsFiles/00_kitchen_559x561.jpg",
      text: "Lapitec",
    },
    {
      url: "https://www.anastasijevic.rs/login/images/Kuhinja---82dcc51d858d0707b27d045a7c5ef70ce35476ed.jpg",
      text: "Kvarc",
    },
    {
      url: "https://mermeta.rs/wp-content/uploads/2021/04/granitne-kuhinjske-ploce.jpg",
      text: "Porcelanske ploče",
    },
    {
      url: "https://www.podovi.org/wp-content/uploads/2016/11/Inovative-world-beogard-U-enterijeru-se-za-izradu-kuhinjskih-frontova-oblaganje-vrata-zidova-i-podova-koristi-furnir-jpg.webp",
      text: "Kameni furnir",
    },
    {
      url: "https://marsaceramica.rs/wp-content/uploads/2019/07/Zidne-Plocice-A-Mano-Decoro-Mix-Bianco-Antico-R6MS-20X20.jpg",
      text: "Pločice",
    },
    {
      url: "https://www.alpod.rs/wp-content/uploads/2023/05/dvoslojni-parket-orah-950x670-1-3.jpg",
      text: "Parket",
    },
    {
      url: "https://www.drvolex.com/wp-content/uploads/Drveni-zidni-paneli-u-enterijeru-1024x717.webp",
      text: "Drveni paneli",
    },
    {
      url: "https://www.gradnja.me/storage/posts/furnir.jpg",
      text: "Drveni furniri",
    },
    {
      url: "src/Assets/backgrounds/tapete.jpg",
      text: "Tapete",
    },
    {
      url: "https://woodsteel.rs/wp-content/uploads/2022/12/jednostavan-oblik-trpezarijskog-stola-izradjen-po-meri-woodsteel.jpg",
      text: "Stolovi",
    },
  ];

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
              element={<Proizvodi proizvodi={proizvodi} />}
            />
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
