import sesion from '../image/login.png';


export default function Login() {
  return (
    <div className='Absolute'>
      <div className="">
        <img src={sesion} className="absolute object-cover w-[100%] h-[100%] px-0 py-0" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        <h1 className="absolute text-[#6A625A] text-5xl py-24  font-bold right-36 flex justify-end w-full ">Inicio de Sesión</h1>
        <h2 className="text-[#6A625A] text-2xl py-36 font-normal  flex justify-end mr-56 ">Solo Planeadores</h2>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 py-56">
        <div className="ml-[60%] ">
          <label for="formGroupExampleInput" className="block text-sm font-medium mb-1">
            Correo electrónico
          </label>
          <input
            type="text"
            id="formGroupExampleInput"
            className="w-96 border-2 border-[#6A625A] rounded-full text-center"
          />
        </div>
        <div className="py-6  ml-[60%] ">
          <label for="formGroupExampleInput" className="block text-sm font-medium mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="formGroupExampleInput"
            className="w-96 border-2 border-[#6A625A] rounded-full text-center"
          />
        </div>
        <div class="ml-[68%]">
          <a href="" class="text-black no-underline text-base">
            ¿Has olvidado tu contraseña?
          </a>
        </div>
        <br />
        <div className="flex items-center justify-center">
          <div className="text-center ml-[79%] bg-[#6A625A]  text-white border border-[#6A625A] py-1 px-4 mr-[0%] cursor-pointer rounded-full hover:bg-white hover:text-black">
            <a href="/" class="custom-button">
              Regresar
            </a>
          </div>
          <div className="text-center ml-[10%] bg-[#6A625A]  text-white border border-[#6A625A] py-1 px-4 mr-[30%] cursor-pointer rounded-full hover:bg-white hover:text-black">
            <a href="/mi-perfil" class="custom-button">
              Entrar
            </a>
          </div>
        </div>
        <br />
        <div class="ml-[72%]">
          <a href="/registro" class="text-black no-underline text-base">
            Crear cuenta
          </a>
        </div>
      </div>
    </div>

  );
}
