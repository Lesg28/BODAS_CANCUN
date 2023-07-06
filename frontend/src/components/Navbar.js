import { Link } from "react-router-dom";
import logo from '../image/saranghae.png';
export default function Navbar() {
    return (
        <div className="">
            <div className="bg-[#6A625A] text-white font-bold flex flex-row justify-between text-2xl">
            <Link to={"/"}>
            <span>
                    <img src={logo} alt="logo saranghae" className="m-3 px-3 h-20 w-18"/>
            </span>
            </Link>
                <div className="flex flex-row text-center gap-12 m-7 px-5">
                <Link to={"/"}>
                <p>Inicio</p>
                </Link>
                    <Link to={"/nosotros"}>
                    <p className="text-white">Nosotros</p>
                    </Link>
                    <Link to={"/planeadores"}> 
                    <p className="text-white ">Planeadores</p>
                    </Link>
                    <Link to={"/los-mas-cotizados"}> 
                    <p className="text-white underline ">Los más cotizados</p>
                    </Link>
                </div>
                <div className="text-right m-7 px-2 ">
                <Link to={"/login"}>
                <button type="button"  className="bg-gray-300 rounded-xl h-[40px] w-[160px] "><a className="text-center ">Inicio sesión</a></button>
                </Link>
                </div>
            </div>
        </div>
    );
}