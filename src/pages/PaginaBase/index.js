import Cabecera from "../../components/Cabecera"
import Container from "../../components/Container"
import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import VideosProvider from "../../context/VideosProvider"
function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <VideosProvider>
            <Container>
                <Outlet/>
            </Container>
            </VideosProvider>
            <Footer></Footer>
        </main>
    )
}

export default PaginaBase