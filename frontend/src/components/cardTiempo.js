export default function CardTiempo({dia,hr,min,seg}){
    return(
        <li className="mb-2">
      <div className="bg-[#F4ECF7] bg-opacity-[30%] rounded flex flex-row w-[110%] text-center p-4 text-2xl text-white">
        <p className='ml-4 font-extralight '>{dia} DÍAS:</p>
        <p className='ml-4 font-extralight '>{hr} HR:</p>
        <p className='ml-4 font-extralight '>{min} MIN:</p>
        <p className='ml-4 font-extralight '>{seg} SEG</p>
      </div>
    </li>
    );
}