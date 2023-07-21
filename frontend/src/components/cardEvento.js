export default function CardEvento({evento,lugar,hora,fecha}){
    return(
        <li className="mb-2">
      <div className="border border-gray-300 rounded p-2 flex-col text-left">
        <p className="font-bold ml-6 list-none">* Boda {evento}</p>
        <p className='ml-8 font-extralight'>{lugar}</p>
        <p className='ml-8 font-extralight'>De {hora} hrs</p>
        <p className='ml-8 font-extralight'>{fecha}</p>
      </div>
    </li>
    );
}