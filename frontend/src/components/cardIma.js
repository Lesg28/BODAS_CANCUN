export default function CardImagen({imagen,nombre,descripcion}){
    return(
        <div className="bg-[#dbc68d] rounded-xl flex flex-col items-center gap-4 p-4">
            <img src={imagen} className="object-cover rounded-xl"/>
            <h1 className="text-center text-2xl">{nombre}</h1>
            <h2>{descripcion}</h2>
            <div className="text-center bg-[#6A625A]  text-white border border-[#6A625A] cursor-pointer rounded-full hover:bg-white hover:text-black">
            <a href="#" class="custom-button">
              Ver más
            </a>
          </div>
          <br/>
            <br/>
        </div>
    );
}