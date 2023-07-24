import local1 from '../image/locaciones.jpg';
import local2 from '../image/locacion2.jpg';
import local3 from '../image/locacion3.jpg';
import CardLocacion from '../components/cardLocacion';
import Footer from '../components/footer';
import CardRegresar from "../components/regresar";


export default function Locacion() {
  return (
    <>
    <div>
      <br/>
      <br/>
            <div>
                <h1 className="text-4xl text-center font-bold text-[#6A625A]">Mis Locaciones</h1>
            </div>
            <br/>
            <br/>
            <div className="flex justify-center items-center gap-4 mr-3 ml-3 ">
            <CardLocacion
            imagen={local1}
            nombre='Hotel Paradisus'
            direccion='Paradisus Cancún Blvd. 
            Kukulcan km 16.5, Zona Hotelera, 
            77500 Cancún, Q.R.'
            />
            <CardLocacion
            imagen={local2}
            nombre='Club Med'
            direccion='Club Med Cancún
            Nizuc, Carretera, Zona Hotelera,
            77500 Cancún, Q.R.'
            />
            <CardLocacion
            imagen={local3}
            nombre='Hotel Crow Paradise'
            direccion='Crown Paradise Club Cancun
            Blvd. Kukulcan Km. 18.5, Zona Hotelera, 
            77500 Cancún, Q.R.'
            />
        </div>
        <br/>
        <br/>
        <CardRegresar
        dato='Regresar'
        />
        <br/>
        <br/>
        <Footer/>
    </div>
    
    </>
    
      );
    }
    