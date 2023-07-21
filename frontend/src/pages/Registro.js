import EntradaInf from '../components/entradaInf'
import ramo from '../image/flores.png'
export default function Registro (){
    return(
        <>
        <br />
        <h1 className="text-5xl text-center font-bold text-[#6A625A]">REGISTRO</h1>
        <br/>
      <br/>
      <div className="relative grid grid-cols-2">
      <div className=''>
        <EntradaInf
        dato='Nombre'
        />
        <br />
        <EntradaInf
        dato='Correo electrónico'
        />
        <br />
        <EntradaInf 
        dato='Contraseña'
        />
        <br />
        <EntradaInf
        dato='Confirmar contraseña'
        />
        <br/>
        <div className='flex flex-row'>
            <div className="text-center ml-[28%] bg-[#6A625A]  text-white border border-[#6A625A] w-[28%] py-1 mr-[0%] cursor-pointer rounded-full hover:bg-white hover:text-black">
              <a href="/" class="custom-button">
                Regresar
              </a>
            </div>
            <div className="text-center ml-[10%] bg-[#6A625A] text-white border border-[#6A625A] w-[28%] py-1 mr-[30%] cursor-pointer rounded-full hover:bg-white hover:text-black">
              <a href="/mi-perfil" class="custom-button">
                Entrar
              </a>
            </div>
            </div>
            </div>
        <div className=''>
          <EntradaInf 
          dato='Fecha de nacimiento'
          />
          <br />
          <EntradaInf
          dato=' Ciudad'
          />
          <br />
          <EntradaInf
          dato='País'
          />
          <br/>
          <br/>
          <div className='ml-[30%]'>
        <img src={ramo} className='w-[50%] h-[60%]'/>
        </div>
         </div>
         </div>
        </>
    )
}