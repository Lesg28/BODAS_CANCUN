export default function CardPerfil({imagen,locacion}){
    return(
        <div className="bg-[#6A625A] rounded-xl flex flex-col p-4 gap-2 w-[90%]">
            <img src={imagen} className="h-60 object-cover rounded-xl"/>
            <h1 className="text-center text-2xl text-white font-semibold"> Boda {locacion}</h1>
        </div>
    );
}