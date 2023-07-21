import CardPerfil from '../components/cardPerfil';
import fotito from '../image/PLANEADOR2.jpg';
import playita from '../image/bodaPlaya.jpg';
import mayita from '../image/bodaMaya.jpg'; //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39Pz2VJ4HDdvQO6Zfrs2vkcUsu2ttztGGtg&usqp=CAU//
import tulum from '../image/bodaTulum.jpg';
import { Link, Outlet } from "react-router-dom";
import CardEvento from '../components/cardEvento';
import Footer from '../components/footer';

export default function MiPerfil (){
    return(
      <div>
        <br/>
      <div className='relative grid grid-cols-2'>
      <div>
      <div class="flex items-center p-[4%] ">
        <img src={fotito} alt="Imagen de perfil" className="w-24 h-24 rounded-full ml-[5%] " />
        <h3 className="ml-4 text-2xl font-bold ">Carlos Mejía</h3>
        <div className="text-center ml-[4%] bg-[#f7cef3]  text-black font-bold border border-[#f7cef3] py-1 px-4 mr-[0%] cursor-pointer rounded-full hover:bg-white hover:text-black">
          <a href="/pasarela" class="custom-button">
            Pago
          </a>
        </div>
      </div>
      <div className="bg-white text-black font-bold flex flex-row text-xl ml-[12%] mr-[1%]">
        <Link to={"/itinerario"}>
          <p className="mr-3 px-1">Itinerario</p>
        </Link>
        <Link to={"/actividades"}>
          <p className="mr-3 px-1">Actividades</p>
        </Link>
        <Link to={"/locaciones"}>
          <p className="mr-3 px-1">Locaciones</p>
        </Link>
        <Link to={"/catalogo"}>
          <p className="mr-3 px-1">Cátalogo nupcial</p>
        </Link>
        <Link to={"/proveedores"}>
          <p className="mr-3 px-1">Proveedores</p>
        </Link>
      </div>
      <div className="flex items-center gap-4 ml-[11%] py-9">
        <CardPerfil
          imagen={playita}
          locacion='Playa'
        />
        <CardPerfil
          imagen={mayita}
          locacion='Maya'
        />
        <CardPerfil
          imagen={tulum}
          locacion='Tulum'
        />
      </div>
      </div>
      <div className="bg-white p-4 border border-[#6A625A] ml-[25%] rounded mr-[10%] text-center">
        <h3 className="text-lg font-semibold mb-4">Mis eventos</h3>
        <ul>
          <CardEvento
            evento='Lesly & Rene'
            lugar='Hotel Riu'
            hora='7:00 a 16:00'
            fecha='28, Julio, 2024'
          />

          <CardEvento
            evento='Olga & Suga'
            lugar='Hotel Club Med Cancún'
            hora='17:00 a 21:00'
            fecha='13, Junio, 2026'
          />
        </ul>
      </div>
      <Outlet />
      </div>
      <br/>
      <Footer/>
    </div>
    )
}