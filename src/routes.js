import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import PaginaBase from "./pages/PaginaBase"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                <Route index element={<Inicio />}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes