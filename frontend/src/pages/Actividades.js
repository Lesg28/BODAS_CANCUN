import Footer from "../components/footer";
import CardRegresar from "../components/regresar";

export default function Actividades() {
  return (
    <>
    <br />
        <h1 className="text-center text-5xl font-semibold text-[#6A625A] ">MIS ACTIVIDADES</h1>
        <br />
        <br/>
        <br/>
    <div className="relative grid grid-cols-2">
        <form className="ml-16  max-w-sm justify-start">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 text-2xl"
            >Actividad
            </label>
            <input
              className="border rounded-2xl border-b-[#6A625A] border-x-[#6A625A] border-y-[#6A625A] hover:bg-[#f8f0e7] w-full py-2 px-3 text-black  outline-none "
              id="actividad"
              type="text"
              placeholder="Ingrese la actividad"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#6A625A] hover:bg-[#977a5d] text-white font-bold h-[40px] w-[25%] rounded-3xl "
              type="button"
            >
              Agregar
            </button>
          </div>
        </form>
          <div class="mr-[10%] text-center justify-end py-6">
            <table class="border-solid border-[#6A625A] border-b-2 mr-[10%]">
              <thead class="bg-[#6A625A] text-white">
                <tr className="font-semibold">
                  <th class="h-5 w-[36px] mr-3 border px-3 py-3 border-[#6A625A]">#</th>
                  <th class="h-5 w-[326px] mr-5 border px-3 py-3 border-[#6A625A]">Actividad</th>
                  <th class="h-5 w-23 mr-5 border px-2 py-2 border-[#6A625A]">Estatus</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td className="border px-3 py-3 border-[#6A625A]">1</td>
                  <td className="border px-3 py-3 border-[#6A625A]">Elegir locación</td>
                  <td class="h-5 w-[100px] mr-5 border px-3 py-3 border-[#6A625A]">
                    <input type="checkbox" id="task1" className="form-checkbox mr-2" />
                    <label htmlFor="task1" className="cursor-pointer"></label>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <CardRegresar
      dato='Regresar'
      />
      <br/>
      <br/>
        <Footer/>
    </>
  );
}