import Footer from '../components/footer';
import '../style/CrearCita.css';

export default function CrearCita() {
  return (
    <>
      <div>
        <br />
        <h1 className="text-4xl text-center font-bold text-[#6A625A]">Crea tu cita aquí</h1>
      </div>
      <div className='relative top-0 left-0 right-0 bottom-0 py-20 '>
        <div className="ml-[20%] ">
          <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="formGroupExampleInput"
            className="w-96 border-2 border-[#6A625A] rounded-full "
          />
        </div>
        <br />
        <div className="ml-[20%] ">
          <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            type="text"
            id="formGroupExampleInput"
            className="w-96 border-2 border-[#6A625A] rounded-full "
          />
        </div>
        <br />
        <div className="ml-[20%] ">
          <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">
            Número Telefónico
          </label>
          <input
            type="text"
            id="formGroupExampleInput"
            className="w-96 border-2 border-[#6A625A] rounded-full "
          />
        </div>


        <div className='absolute top-0 left-0 right-0 bottom-0 py-20 '>
          <div className="ml-[60%] ">
            <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">
              Lugar de la Cita
            </label>
            <input
              type="text"
              id="formGroupExampleInput"
              className="w-96 border-2 border-[#6A625A] rounded-full "
            />
          </div>
          <br />
          <div className="ml-[60%] ">
            <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">
              Hora de Cita
            </label>
            <input
              type="text"
              id="formGroupExampleInput"
              className="w-96 border-2 border-[#6A625A] rounded-full "
            />
          </div>
          <br />
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
        </div>
        <br />
      </div>
      <Footer />

    </>
  )
}
