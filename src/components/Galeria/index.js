import Card from "../Card"
import Titulo from "../Titulo"
import styles from "./Galeria.module.css"


function Galeria() {
    return (
        <>
            <div className={styles.container}>
                <Titulo>Que ing3 su mxer el hiram</Titulo>
                <div className={styles.cardContainer}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <Titulo>Back end</Titulo>
                <div className={styles.cardContainer}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </>)
}

export default Galeria