import { useEffect, useState } from "react";
import Card from "../Card";
import Pie from "../Card/Pie";
import Titulo from "../Titulo";
import styles from "./Galeria.module.css";

function Galeria() {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("https://alura-flix-api-seven.vercel.app/videos")
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            });
    }, []);

    useEffect(() => {
        fetch("https://alura-flix-api-seven.vercel.app/categoria")
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            });
    }, []);

    return (
        <div className={styles.container}>
            {categorias.map((cat) => {
                const videosFiltrados = videos.filter(video => video.categoria.nombre === cat.nombre);
                return (
                    <div key={cat.id} className={styles.categorySection}>
                        <Titulo {...cat} key={cat.nombre}>{cat.nombre}</Titulo>
                        <div className={styles.videoContainer}>
                            {videosFiltrados.length > 0 ? (
                                videosFiltrados.map((video) => (
                                    <Card {...video} key={video.id}> <Pie /></Card>
                                ))
                            ) : (
                                <p>No hay videos en esta categoría</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Galeria;
