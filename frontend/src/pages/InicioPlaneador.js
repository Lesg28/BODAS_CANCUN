import boda from '../image/bodaPlanner.jpg';
import Footer from "../components/footer";
import CardTiempo from '../components/cardTiempo';

export default function InicioPlaneador (){
    return (
        <>
        <div>
            <img src={boda} alt="logo saranghae" className=" h-[100%] w-[100%]" />
            <div className='absolute top-[75%]  left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center'>
            <h1 className='text-white font-bold text-5xl'>BIENVENIDO</h1>
            <h1 className='text-white font-semibold text-5xl'>-Carlos Mejía-</h1>
            </div>
            <div className='absolute top-[120%]  left-[22%] transform -translate-x-[50%] -translate-y-[50%] text-center'>
            <h2 className='text-white text-2xl font-extralight text-left ml-10 '>Mi Próximo Evento</h2>
            <CardTiempo
            dia='30'
            hr='23'
            min='32'
            seg='54'
            />
            </div>
          </div>
        <Footer/>
        </>
    )
}