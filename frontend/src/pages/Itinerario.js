import Footer from "../components/footer";
import CardRegresar from "../components/regresar";

export default function Itinerario() {
  return (
    <>
      <br />
      <h1 className="text-center text-5xl font-semibold   text-[#6A625A] ">ITINERARIO</h1>
      <br />
      <form className="ml-10 mr-10 ">
      <div className="relative grid grid-cols-4">


        <div>
        <div className="mb-4">
              <label
                className="block text-black  font-extralight mb-2 text-xl row-auto"
              >FECHA
              </label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3 text-black  outline-none "
                id="itinerario"
                type="text"
                placeholder="dd/mm/yyyy"
              />
            </div>
        </div>

        <div>
        <div className="mb-4 ml-[10%]">
              <label
                className="block text-black  font-extralight mb-2 text-xl row-auto"
              >HORA
              </label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3 text-black  outline-none "
                id="itinerario"
                type="text"
                placeholder="18:30:00"
              />
            </div>
        </div>

        <div>
        <div className="mb-4 ml-[10%]">
              <label
                className="block text-black  font-extralight  mb-2 text-xl row-auto"
              >ACTIVIDAD
              </label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3 text-black  outline-none "
                id="itinerario"
                type="text"
                placeholder="escribe tu actividad"
              />
            </div>
        </div>

        <div>
        <div className="mb-4 ml-[10%]">
              <label
                className="block text-black  font-extralight mb-2 text-xl row-auto"
              >CATEGORIA
              </label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3  text-black  outline-none"
                id="itinerario"
                type="text"
                placeholder="Selecciona tu categoria"
              />
            </div>
        </div>


      </div>
      <div className="flex items-center justify-center ">
              <button
                className="bg-[#deb3b3] hover:bg-[#c29a9a] text-white font-bold h-[40px] w-[85px] rounded-3xl "
                type="button"
              >
                Agregar
              </button>
            </div>
          </form>
          <br/>
          <br/>
      <div>
      <table class="border-solid border-[#6A625A] border-b-2 mr-10 ml-10">
              <thead class="bg-[#E9D5D5] text-black">
                <tr className="font-semibold">
                  <th class="w-[2%] border px-3 py-3 border-[#6A625A]">#</th>
                  <th class="w-[5%] border px-3 py-3 border-[#6A625A]">FECHA</th>
                  <th class="w-[6%] border px-2 py-2 border-[#6A625A]">HORA</th>
                  <th class="w-[17%] border px-2 py-2 border-[#6A625A]">ACTIVIDAD</th>
                  <th class="w-[5%] mr-2 border px-2 py-2 border-[#6A625A]">CATEGORIA</th>
                  <th class="w-[5%] mr-2 border px-2 py-2 border-[#6A625A]">ESTATUS</th>
                </tr>
              </thead>
              <tbody class="bg-[#E9D5D5] text-center">
                <tr>
                  <td className="border px-3 py-3 border-[#6A625A]">1</td>
                  <td className="border px-3 py-3 border-[#6A625A]">28/11/2023</td>
                  <td className="border px-3 py-3 border-[#6A625A]">18:30</td>
                  <td className="border px-3 py-3 border-[#6A625A]">Boda en la selva</td>
                  <td className="border px-3 py-3 border-[#6A625A]">Recibir el pastel</td>
                  <td class="h-5 w-[100px] mr-5 border px-3 py-3 border-[#6A625A]">
                    <input type="checkbox" id="task1" className="form-checkbox mr-2" />
                    <label htmlFor="task1" className="cursor-pointer"></label>
                  </td>
                </tr>
              </tbody>
            </table>
            <br/>
            <br/>
            <CardRegresar
            dato='Regresar'
            />
            </div>
      <br />
      <Footer />
    </>
  )
}
