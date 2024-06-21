
import Cabecera from "../../components/Cabecera"
import Container from "../../components/Container"
import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <Container>
                <Outlet/>
            </Container>
            <Footer></Footer>
        </main>
    )
}

export default PaginaBase