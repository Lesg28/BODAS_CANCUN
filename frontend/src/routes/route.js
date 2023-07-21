import { createBrowserRouter } from "react-router-dom";
import Itinerario from "../pages/Itinerario"
import Actividades from "../pages/Actividades";
import Catalogo from "../pages/Catalogo";
import Cotizados from "../pages/Cotizados";
import Proveedores from "../pages/Proveedores";
import Registro from "../pages/Registro";
import Error from "../pages/error";
import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";
import Nosotros from "../pages/Nosotros";
import Ayuda from "../pages/Ayuda";
import Planeador from "../pages/Planeador";
import Login from "../pages/login";
import Locacion from "../pages/Locacion";
import CrearCita from "../pages/CrearCita";
import MiPerfil from "../pages/MiPerfil";
import Inicio from "../pages/Inicio";
import Prueba from "../pages/Prueba";
import Pasarela from "../pages/pasarela";
import InicioPlaneador from "../pages/InicioPlaneador";

export const routes = createBrowserRouter([
    {
        path: "/",
            element: <Navbar />,
            children: [
                {
                    path: "/",
                    element: <Inicio/>
                },
                {
                    path: "/los-mas-cotizados",
                    element: <Cotizados />
                },
                {
                    path: "/nosotros",
                    element: <Nosotros/>
                },
                {
                    path: "/planeadores",
                    element: <Planeador/>
                },
                {
                    path: "/crear-cita",
                    element: <CrearCita/>
                },
            ]
        },
    {
        path: "",
        element: <Navbar2 />,
        children: [
            {
                path: "/actividades",
                element: <Actividades/>
            },
            {
                path: "/mi-perfil",
                element: <MiPerfil/>
            },
            {
                path: "/itinerario",
                element: <Itinerario />
            },
            {
                path: "/catalogo",
                element: <Catalogo />
            },
            {
                path: "/proveedores",
                element: <Proveedores />
            },
            {
                path: "/ayuda",
                element: <Ayuda />
            },
            {
                path: "/locaciones",
                element: <Locacion />
            },
            {
                path: "/pasarela",
                element: <Pasarela />
            },
            {
                path: "/inicioPlanner",
                element: <InicioPlaneador />
            },

        ]
    },
    {
        path: "/login",
        element: <Login/>
    },

    {
        path: "/registro",
        element: <Registro />
    },
    {
        path: "/*",
        element: <Error />
    },
    {
        path: "/prueba",
        element: <Prueba/>
    }

]);