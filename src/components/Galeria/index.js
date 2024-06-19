import Card from "../Card";
import Pie from "../Card/Pie";
import Titulo from "../Titulo";
import styles from "./Galeria.module.css";

function Galeria() {
    return (
        <>
            <div className={styles.container}>
                <Titulo>Front end</Titulo>
                <div className={styles.cardContainer}>
                    <Card>
                    <Pie />
                    </Card>
                    
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
        </>
    );
}

export default Galeria;
