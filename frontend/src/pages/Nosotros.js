import '../style/Nosotros.css';
import grupito from '../image/grupito.jpeg';
import grupo from '../image/grupo.png';
import instalacion from '../image/institucion.png';
import birrete from '../image/birrete.png';
import Footer from "../components/footer";

export default function Nosotros(){
    return (
        <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Nosotros</title>
      
      <header></header>
      <main>

        <section className="contenedor sobre-nosotros">
          <h2 className="text-center text-6xl font-semibold   text-[#6A625A]">Nosotros</h2>
          <br/>
          <br/>
          <br/>
          <div className="contenedor-sobre-nosotros font-semibold   text-[#6A625A]">
            <img src={grupito} alt="" className="imagen-about-us" />
            <div className="contenido-textos">
              <h3>
                <img className="img2" src={grupo} /> Equipo:
              </h3>
              <p>
                Olga Elizabeth Moreno Godinez
                <br />
                Lesly del Carmen Gonzalez Gonzalez
                <br />
                Daniel Alejandro Tuz Carrillo
              </p>
              <h3>
                <img className="img2" src={instalacion} /> Institución:
              </h3>
              <p>Universidad Tecnologica de Cancún</p>
              <h3>
                <img className="img2" src={birrete}/> Carrera:
              </h3>
              <p>TSU en Desarrollo de Software Multiplataforma</p>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </>
    );
}

