import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import PaginaBase from "./pages/PaginaBase"
import NotFound from "./pages/NotFound"
import NuevoVideo from "./pages/NuevoVideo"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="nuevo_video" element={<NuevoVideo />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes