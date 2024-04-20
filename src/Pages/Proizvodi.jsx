import ProizvodiGrid from "../Components/ProizvodiGrid";

const Proizvodi = ({proizvodi}) => {
    return ( 

        <div className="proizvodi-page">
            <div className="proizvodi-head head">
                <h3>PROIZVODI</h3>
                <div className="separator"></div>
                <p className="opis">Istražite našu ponudu koja će dodati poseban šarm vašem prostoru.</p>
                <div className="arrows"></div>
            </div>

            <div className="proizvodi-container">
                <ProizvodiGrid proizvodi={proizvodi}/>
            </div>
      </div>

     );
}
 
export default Proizvodi;