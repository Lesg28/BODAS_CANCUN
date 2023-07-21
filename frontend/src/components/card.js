export default function CardDescuento({descuento,imagen,locacion,nombre,lugar,precio}){
    return(
        <div className="bg-[#eef0f2] rounded-xl flex flex-col items-center gap-4 p-4">
            <img src={descuento} className='flex items-center ml-auto h-14 w-14 '/>
            <img src={imagen} className="w-50 h-60 object-cover rounded-xl"/>
            <h1 className="text-center text-2xl">{locacion}</h1>
            <h2>Planeador: {nombre}</h2>
            <h2>{lugar}</h2>
            <h2>${precio}</h2>
        </div>
    );
}