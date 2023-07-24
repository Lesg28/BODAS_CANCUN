import Footer from "../components/footer";
import CardRegresar from "../components/regresar";

export default function Proveedores (){
    return(
        <>
        <br />
        <h1 className="text-center text-5xl font-semibold   text-[#6A625A] ">PROVEEDORES</h1>
        <br />
        <br/>
        <div className="relative grid grid-cols-2">
        <form className="ml-16  max-w-sm justify-start">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2 text-xl"
            >Nombre Proveedor
            </label>
            <input
              className="border rounded-2xl border-b-[#6A625A] border-x-[#6A625A] border-y-[#6A625A] hover:bg-[#f8f0e7] w-full py-2 px-3 text-black  outline-none "
              id="nombre_proveedor"
              type="text"
              placeholder="Ingrese proveedor"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2 text-xl"
            >Contacto
            </label>
            <input
              className="border rounded-2xl border-b-[#6A625A] border-x-[#6A625A] border-y-[#6A625A] hover:bg-[#f8f0e7] w-full py-2 px-3 text-black  outline-none "
              id="contacto"
              type="text"
              placeholder="Ingrese el contacto"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#6A625A] hover:bg-[#977a5d] text-white font-bold h-[40px] w-[24%] rounded-3xl "
              type="button"
            >
              Agregar
            </button>
          </div>
        </form>
        <div>
          <div class="ml-[1%] mr-[7%] text-center">
            <table class="table-auto border-solid border-[#6A625A] border-b-2">
              <thead class="bg-[#6A625A] text-white">
                <tr className="font-semibold">
                  <th class="h-5 w-[4%] mr-3 border px-3 py-3 border-[#6A625A]">#</th>
                  <th class="h-5 w-[20%] mr-5 border px-3 py-3 border-[#6A625A]">Nombre Proveedor</th>
                  <th class="h-5 w-[12%] mr-5 border px-2 py-2 border-[#6A625A]">Contacto</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td className="border px-3 py-3 border-[#6A625A]">1</td>
                  <td className="border px-3 py-3 border-[#6A625A]">Isai Trujillo Mendoza</td>
                  <td className="border px-3 py-3 border-[#6A625A]">9989324512</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CardRegresar
            dato='Regresar'
            />
      <br/>
        <Footer/>
    </>
    )
}