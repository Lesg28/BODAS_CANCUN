import Footer from "../components/footer";
import llamada from '../image/llamada.png';


export default function Ayuda() {
  return (
    <div>
      <div>
        <br/>
        <br/>
        <div>
          <h1 className="text-4xl text-center font-bold text-[#6A625A]">¿En qué podemos ayudarte?</h1>
        </div>
        <br />
        <br />
        <h2 className="text-xl font-bold mb-4 mr-[70%]">Escribe tu duda aquí</h2>
        <div className="p-6 w-[40%]  border-2 border-gray-400 rounded-lg ml-[8%]">
          <textarea
            className="p-4 w-full h-40 resize-none"
          ></textarea>
          <button className="bg-[#6A625A] hover:bg-[#bf4343] text-white rounded-full py-2 px-3 mt-5 ml-[80%]">
            Enviar
          </button>
        </div>
        <h3 className='text-xl font-semibold py-6  ml-[8%] text-[#6A625A]'>Contáctanos para más información.</h3>
        <div className='flex flex-row gap-3 ml-[8%]'>
          <a className="h-[15%] w-[15%] flex items-center gap-4"><img src={llamada} />998-339-0436</a>
          <a className="h-[15%] w-[15%] flex items-center gap-4"><img src={llamada} />998-489-8711</a>
          <a className="h-[15%] w-[15%] flex items-center gap-4"><img src={llamada} />998-145-7131</a>
        </div>
      </div>
      <br/>
      <br/>
      <Footer />
    </div>

  );
}
