export default function CardLocacion({imagen,nombre,direccion}){
    return(
        <div className="bg-white rounded-xl flex flex-col items-center gap-4 p-4">
            <img src={imagen} className="w-50 h-60 object-cover rounded-xl w-full"/>
            <h1 className="text-center text-2xl">{nombre}</h1>
            <h2 className="text-center text-xl">{direccion}</h2>
        </div>
    );
}