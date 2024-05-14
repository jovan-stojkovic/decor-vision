import "../Stilovi/Stranica.scss";
import { useContext } from "react";
import HeadProizvod from "../Komponente/HeadProizvod";
import ThemeContext from "../Helpers/ThemeContext";

const UsloviKoriscenja = () => {
  const { theme } = useContext(ThemeContext);

  const headline = "USLOVI KORIŠĆENJA";
  return (
    <>
      <div className={`uslovi-koriscenja page ${theme}`}>
        <HeadProizvod headline={headline} />

        <div className="container">
          <h2>USLOVI KORIŠĆENJA I POLITIKA PRIVATNOSTI</h2>
          <div className="separator"></div>
          <p>
            Poštovani korisnici, pre nego što koristite naše usluge, molimo vas
            da pažljivo pročitate sledeće uslove. Svaka poseta našem sajtu, kao
            i kupovina, znači da ste ove uslove pročitali i da se slažete sa
            njima u celosti. Ukoliko su oni za vas neprihvatljivi, molimo vas da
            ne koristite ovu prezentaciju.
          </p>

          <h4>Dobrodošli na sajt Decorvision.rs.</h4>

          <p>
            Decorvision.rs vam omogućava korišćenje usluga i sadržaja svog
            portala koje je podložno niže navedenim Uslovima korišćenja. Uslovi
            korišćenja se primenjuju na sve sadržaje i usluge decorvision.rs.
            Korišćenjem bilo kog dela portala, smatra se da su korisnici
            upoznati sa ovim uslovima, kao i da prihvataju korišćenje sadržaja
            ovog portala isključivo za ličnu upotrebu i na sopstvenu
            odgovornost.
          </p>

          <h4>Opšte odredbe</h4>

          <p>
            Decorvision.rs ima autorska prava na sve sadržaje (tekstualne,
            vizuelne i audio materijale, baze podataka, programerski kod).
            Neovlašćeno korišćenje bilo kog dela portala, bez dozvole vlasnika
            autorskih prava, smatra se kršenjem autorskih prava i podložno je
            tužbi.
          </p>

          <p>
            Decorvision.rs administrira ovu lokaciju iz svojih kancelarija u
            Beogradu, Srbija. Ni na koji način ne izjavljuje da su materijali
            ili usluge na ovoj lokaciji prikladni ili dostupni za korišćenje
            izvan Srbije, a pristupanje iz područja gde je njihov sadržaj
            nezakonit je zabranjeno. Nije dopušteno korišćenje ili izvoz,
            odnosno uvoz, radi izvoza materijala ili usluga na ovoj lokaciji
            niti bilo koje kopiranje ili prilagođavanje u suprotnosti sa važećim
            zakonima ili propisima uključujući, bez ograničenja, izvozne zakone
            i propise Srbije. Ako odlučite da pristupite ovoj lokaciji izvan
            Srbije, to radite na sopstvenu inicijativu i smatrate se odgovornim
            za poštovanje važećih lokalnih zakona. Ovi Uslovi se tumače u skladu
            sa zakonima Republike Srbije i neće se primenjivati načela o
            rešavanju neusaglašenosti zakona.
          </p>

          <h4>Politika privatnosti i zaštita podataka</h4>

          <p>
            Sve informacije koje nam dostavite u svrhu kupovine proizvoda ili
            usluga biće tretirane s visokim stepenom zaštite i privatnosti. Vaši
            lični podaci će biti obrađivani u skladu sa zakonima Republike
            Srbije i relevantnim propisima o zaštiti podataka. Obećavamo da
            nećemo deliti, prodavati ili prenositi vaše lične podatke trećim
            licima bez vaše saglasnosti.
          </p>

          <p>
            Prilikom prikupljanja ličnih podataka, poštovaćemo vašu privatnost i
            osigurati da se podaci čuvaju sigurno. Naša Politika Privatnosti
            detaljno definiše kako se obrađuju, štite i čuvaju lični podaci
            korisnika.
          </p>

          <p>
            Naravno, u skladu sa važećim zakonima, u svakom trenutku imate prava
            da zatražite pristup svojim ličnim podacima, ispravite netačne
            informacije i povučete svoju saglasnost za dalju obradu. Više
            informacija o tome možete pronaći u našoj Politici Privatnosti.
          </p>

          <h4>
            Materijal koji prosleđuje korisnik (komentari i drugi sadržaji)
          </h4>

          <p>
            Lični podaci koje prosledite sajtu decorvision.rs u svrhu dobijanja
            proizvoda ili usluga biće tretirane u skladu sa našom dokumentom o
            privatnosti na mreži. Zabranjeno je slanje ili prenošenje na ovu
            lokaciju ili sa nje bilo kojih nezakonitih, pretećih, uvredljivih,
            klevetničkih, opscenih, pornografskih ili drugih materijala koji su
            u suprotnosti s bilo kojim zakonom.
          </p>

          <p>
            Decorvision.rs na ovoj lokaciji ne želi od vas da prima poverljive
            ili druge informacije kojima ne može slobodno da raspolaže. Svi
            materijali, informacije ili druga saopštenja koja prenosite ili
            šaljete na ovu lokaciju neće se smatrati poverljivim i onima kojima
            se ne može slobodno raspolagati. Decorvision.rs nema nikakve obaveze
            prema ovim saopštenjima. Naši zaposleni mogu da kopiraju, otkrivaju,
            distribuiraju, primenjuju ili na drugi način koriste saopštenja i
            sve podatke, slike, zvukove, tekst i sve ostale materijale u njima
            sadržane za bilo koje odnosno za sve komercijalne i nekomercijalne
            svrhe.
          </p>

          <p>
            Naravno, u ovu grupu podataka ne spadaju vaši lični podaci. Njih, u
            skladu sa našom Politikom Privatnosti, koristimo samo za internu
            upotrebu, ne obelodanjujemo niti prosleđujemo trećim licima, već
            koristimo isključivo za potrebe obrade vaših porudžbenica.
          </p>

          <p>
            Sve informacije vezane uz transakcije kupac – prodavnica
            decorvision.rs, smatraju se poslovnom tajnom, i prema njima se treba
            ophoditi skladno zakonskim propisima Republike Srbije.
          </p>

          <h4>Zaštita privatnosti podataka</h4>

          <p>
            Da bismo ispravno obradili vaše narudžbine, neophodni su nam vaše
            ime, adresa, e-mail adresa i broj telefona. Obećavamo da ćemo čuvati
            privatnost svih naših korisnika. Prikupljamo samo osnovne podatke o
            korisnicima i podatke neophodne za poslovanje i informisanje
            korisnika u skladu sa najboljim poslovnim praksama, kako bismo
            pružili visokokvalitetnu uslugu. Svi korisnici imaju opciju da
            izaberu da li žele da budu deo naše mailing liste ili ne. Svi podaci
            o korisnicima su strogo čuvani i dostupni su samo zaposlenima kojima
            su neophodni za obavljanje posla. Svi naši zaposleni su obavezni da
            poštuju pravila o zaštiti privatnosti. Obećujemo da nećemo koristiti
            prikupljene podatke u druge svrhe ili ih deliti sa trećim licima.
          </p>

          <p>
            Pored toga, prikupljamo, analiziramo i obrađujemo podatke o
            proizvodima koje naši posetioci pretražuju i kupuju, kao i o
            stranicama koje posećuju. Ove informacije koristimo za poboljšanje
            naše ponude i izgleda našeg sajta, kako bismo omogućili
            jednostavniju, sigurniju i udobniju kupovinu.
          </p>

          <p>
            Decorvision.rs koristi "kolačiće" (cookies) kako bi pomogao
            korisnicima da prilagode korišćenje interneta svojim potrebama.
            Kolačići su tekstualni fajlovi smešteni na vašem računaru od strane
            web servera. Oni ne mogu pokrenuti programe ili isporučiti viruse na
            vašem računaru. Kolačići su jedinstveno dodeljeni vama i samo ih
            može čitati web server u domenu koji vam ih je poslao. Osnovna svrha
            kolačića je da pruži pogodnosti koje će uštedeti vaše vreme.
          </p>
        </div>
      </div>
    </>
  );
};

export default UsloviKoriscenja;
