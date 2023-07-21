import { Link, Outlet } from "react-router-dom";
import logo from '../image/saranghae.png';
export default function Navbar2() {
    return (
        <div>
            <div className="bg-[#6A625A] text-white font-bold flex flex-row w-full text-xl">
                <div className="w-full flex flex-row">
                <Link to={"/mis-eventos"}>
                    <span>
                        <img src={logo} alt="logo saranghae" className="m-3 px-3 h-17 w-16" />
                    </span>
                </Link>
                <Link to={"/inicioPlanner"}>
                    <p className="m-4 px-1">Inicio</p>
                </Link>
                <Link to={"/nosotros"}>
                    <p className="text-white m-4 px-1">Nosotros</p>
                </Link>
                <Link to={"/ayuda"}>
                    <p className="text-white m-4 px-1">Ayuda</p>
                </Link>
                </div>
                <div className="text-right m-4 px-2 w-full ">
                    <Link to={"/mi-perfil"}>
                        <button type="button" className="bg-gray-300 rounded-xl h-[40px] w-[160px] "><a className="text-center ">Mi perfil</a></button>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}