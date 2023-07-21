import boda from '../image/bodaprincipal.jpeg';
import prom1 from '../image/Promocion1.jpg';
import prom2 from '../image/promocion2.jpeg';
import prom3 from '../image/promocion3.jpg';
import prom4 from '../image/promocion4.jpg';
import Footer from "../components/footer";
import descuento from '../image/descuento.png'
import CardDescuento from '../components/card';


export default function Inicio() {
  return (
    <>
      <div className="font-medium ">
        <div>
          <div>
            <img src={boda} alt="logo saranghae" className=" h-[100%] w-[100%]" />
            <div className='absolute top-[120%]  left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center'>
              <h1 className='text-white text-5xl font-semibold '>Saranghae</h1>
              <h2 className='text-white text-2xl mt-2 font-extralight '>Encuentra a tu planificador ideal</h2>
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />
          <div>
            <h className="text-4xl ml-[32%] font-bold text-[#6A625A]">Promociones de Planeadores</h>
          </div>
          <br />
          <br />
          <br />
          <div className='flex justify-center items-center gap-4 mr-3 ml-3 '>
            <CardDescuento
              descuento={descuento}
              imagen={prom1}
              locacion='Boda en la Playa'
              nombre='Carlos Mejía'
              lugar='Cancun, Quintana Roo'
              precio='90,000'
            />
            <CardDescuento
              descuento={descuento}
              imagen={prom2}
              locacion='Boda Maya'
              nombre='Isaí Carrillo'
              lugar='Cancun, Quintana Roo'
              precio='95,000'
            />
            <CardDescuento
              descuento={descuento}
              imagen={prom3}
              locacion='Boda al aire libre'
              nombre='Laura Dominguez'
              lugar='Cancun, Quintana Roo'
              precio='89,000'
            />
            <CardDescuento
              descuento={descuento}
              imagen={prom4}
              locacion='Boda en yate'
              nombre='Tania Solano'
              lugar='Cancun, Quintana Roo'
              precio='85,000'
            />
          </div>
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    </>
  )
} 