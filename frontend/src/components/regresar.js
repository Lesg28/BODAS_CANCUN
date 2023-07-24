export default function CardRegresar({dato}){
    return(
        <div className="mr-10">
        <div className="text-center ml-[89%] bg-[#6A625A]  text-white border border-[#6A625A] py-1 px-2 cursor-pointer rounded-full hover:bg-white hover:text-black">
            <a href="/mi-perfil" class="custom-button">
              {dato}
            </a>
          </div>
          </div>
    );
}