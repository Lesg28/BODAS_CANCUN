import Footer from "../components/footer";

export default function Itinerario() {
  return (
    <>
      <br />
      <h1 className="text-center text-5xl font-semibold   text-[#6A625A] ">ITINERARIO</h1>
      <br />
      <div className="relative grid grid-cols-2">
        <div>
          <form className="ml-16  max-w-sm justify-start">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 text-2xl"
              >DÍA
              </label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3 text-black  outline-none "
                id="nombre_proveedor"
                type="text"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2 text-2xl">HORA</label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3 text-black  outline-none "
                id="articulos_provee"
                type="text"
                placeholder="Ingrese hora"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 text-2xl"
              >ACTIVIDAD
              </label>
              <input
                className="border rounded-2xl border-b-[#FAE1F8] border-x-[#FAE1F8] border-y-[#FAE1F8] bg-[#FAE1F8] w-full py-2 px-3 text-black  outline-none "
                id="contacto"
                type="text"
                placeholder="Ingrese actividad"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#deb3b3] hover:bg-[#c29a9a] text-white font-bold h-[40px] w-[75px] rounded-3xl "
                type="button"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
        <div>
          <div>
            <div class="mr-[15%]text-center py-[5%]">
              <table class="border-solid border-[#6A625A] border-b-2">
                <thead class="bg-[#E9D5D5] text-black">
                  <tr className="font-semibold">
                    <th class="w-[2%] border px-3 py-3 border-[#6A625A]">#</th>
                    <th class="w-[5%] border px-3 py-3 border-[#6A625A]">DÍA</th>
                    <th class="w-[6%] border px-2 py-2 border-[#6A625A]">HORA</th>
                    <th class="w-[17%] border px-2 py-2 border-[#6A625A]">ACTIVIDAD</th>
                    <th class="w-[5%] mr-2 border px-2 py-2 border-[#6A625A]">ESTATUS</th>
                  </tr>
                </thead>
                <tbody class="bg-[#E9D5D5] text-center">
                  <tr>
                    <td className="border px-3 py-3 border-[#6A625A]">1</td>
                    <td className="border px-3 py-3 border-[#6A625A]">28/11/2023</td>
                    <td className="border px-3 py-3 border-[#6A625A]">18:30</td>
                    <td className="border px-3 py-3 border-[#6A625A]">Recibir el pastel</td>
                    <td class="h-5 w-[100px] mr-5 border px-3 py-3 border-[#6A625A]">
                      <input type="checkbox" id="task1" className="form-checkbox mr-2" />
                      <label htmlFor="task1" className="cursor-pointer"></label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
