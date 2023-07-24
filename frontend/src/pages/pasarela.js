import mercado from '../image/Mercado.png';
import Footer from '../components/footer';
import CardRegresar from "../components/regresar";

export default function Pasarela () {
    return (
      <div>
      <div className="relative grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold text-[#6A625A] ml-[20%] py-10">Pago Plan Wedding Planner</h1>
          <div className="ml-[20%] py-2">
            <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">Nombre del titular</label>
            <input type="text" id="formGroupExampleInput" className="w-96 border-2 border-[#6A625A] rounded-full text-center" />
          </div>
          <div className="ml-[20%] py-2 ">
            <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">Número de tarjeta</label>
            <input type="number" id="formGroupExampleInput" className="w-96 border-2 border-[#6A625A] rounded-full text-center" />
          </div>
          <div className="ml-[20%] py-2">
            <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">Expiración (mm/yy)</label>
            <input type="text" id="formGroupExampleInput" className="w-96 border-2 border-[#6A625A] rounded-full text-center" />
          </div>
          <div className="ml-[20%] py-2 ">
            <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">CVV</label>
            <input type="number" id="formGroupExampleInput" className="w-37 border-2 border-[#6A625A] rounded-full text-center" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-[#6A625A] ml-[15%] py-10">Pago a través de:</h1>
          <img src={mercado} alt='logo de mercado pago' className='ml-[15%] w-[50%] h-[45%]'/>
        <div className='bg-[#6A625A] p-2 border border-[#6A625A] ml-[15%] rounded-xl  mr-[55%]'>
        <p className='text-white'>Total a pagar:</p>
        <br/>
        </div>
        <br/>
        <div className="text-center ml-[15%] bg-[#363433]  text-white border border-[#363433] py-1 mr-[72%] cursor-pointer rounded-2xl hover:bg-white hover:text-black">
            <a href="#" class="custom-button">
              Pagar
            </a>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="mr-10">
        <div className="text-center ml-[89%] bg-[#6A625A]  text-white border border-[#6A625A] py-1 px-2 cursor-pointer rounded-full hover:bg-white hover:text-black">
            <a href="/inicioPlanner" class="custom-button">
              Regresar
            </a>
          </div>
          </div>
      <br/>
      <br/>
      <Footer/>
    </div>
    )
}
