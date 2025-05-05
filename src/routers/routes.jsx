import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home"
import {Mensajes} from "../pages/Mensajes"
import {Dashboard} from "../pages/Dashboard"

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mensajes" element={<Mensajes />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>  
    )
}