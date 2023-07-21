export default function EntradaInf({dato}){
    return(
        <div className="ml-[20%] ">
          <label for="formGroupExampleInput" className="block text-sm font-medium mb-2">{dato}</label>
          <input
            type="text"
            id="formGroupExampleInput"
            className="w-96 border-2 border-[#6A625A] rounded-full "
          />
          </div>
    );
}