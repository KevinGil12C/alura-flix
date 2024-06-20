import { useEffect, useState } from "react";
import Card from "../Card";
import Pie from "../Card/Pie";
import Titulo from "../Titulo";
import styles from "./Galeria.module.css";

function Galeria() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch("https://alura-flix-api-seven.vercel.app/videos")
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            });
    }, []);
    return (
        <>
            <div className={styles.container}>
                <Titulo>Front end</Titulo>
                <section className={styles.container}>
                {videos.map((video) => {
                    return (<Card {...video} key={video.id}> <Pie/></Card>)
                })}
            </section>
            </div>
        </>
    );
}

export default Galeria;
