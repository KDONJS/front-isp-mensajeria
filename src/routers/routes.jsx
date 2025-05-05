import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home"
import {Mensajes} from "../pages/Mensajes"
import {Dashboard} from "../pages/Dashboard"
import {Usuarios} from "../pages/Usuarios"
import {Tareas} from "../pages/Tareas"
import {Configuracion} from "../pages/Configuracion"
import {Logout} from "../pages/Logout"

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Mensajes" element={<Mensajes />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/Tareas" element={<Tareas />} />
            <Route path="/Configuracion" element={<Configuracion />} />
            <Route path="/Logout" element={<Logout />} />
        </Routes>  
    )
}