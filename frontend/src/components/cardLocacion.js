export default function CardLocacion({imagen,direccion}){
    return(
        <div className="bg-white rounded-xl flex flex-col items-center gap-4 p-4">
            <img src={imagen} className="w-50 h-60 object-cover rounded-xl"/>
            <h1 className="text-center text-xl">{direccion}</h1>
        </div>
    );
}