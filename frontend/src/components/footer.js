import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import correo from '../image/correo.png';

export default function Footer (){
    return (
        <>
        <footer>
      <div className="bg-[#6A625A] items-start justify-evenly gap-8 p-8 w-full flex flex-row text-white font-medium ">
      <div class="text-left">
  <a className="h-[15%] w-[15%] flex items-center gap-4"><img src={facebook}/>  @saranghae_cancun</a>
  <br/>
  <a className="h-[15%] w-[15%] flex items-center gap-4 "><img src={instagram}/>  @saranghae_cancun</a>
  </div>
  <div class="text-center">
  <a class="h-[15%] w-[15%] flex items-center gap-4  "><img src={correo}/>  saranghae.c@gmail.com</a>
  </div>
      <div class="text-right">
    <p className=" leading-8">Inicio</p>
    <p className="leading-7">Nosotros</p>
    <p className="leading-7">Planeadores</p>
    <p className="leading-7 ">Los más cotizados</p>
  </div>
      </div>
    </footer>
        
        </>
    );
}