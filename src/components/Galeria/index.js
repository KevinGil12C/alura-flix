// Galeria.js
import React, { useEffect } from 'react';
import Card from '../Card';
import Pie from '../Card/Pie';
import Titulo from '../Titulo';
import styles from './Galeria.module.css';
import { useVideosContext } from '../../context/CRUD';


function Galeria() {
    const { videos, setVideos, categorias, setCategorias } = useVideosContext();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const responseVideos = await fetch('https://alura-flix-api-five.vercel.app/videos');
                if (!responseVideos.ok) {
                    throw new Error('Error al cargar los videos');
                }
                const dataVideos = await responseVideos.json();
                setVideos(dataVideos); // Actualiza los videos en el contexto
            } catch (error) {
                console.error('Error al cargar los videos:', error);
            }
        };

        const fetchCategorias = async () => {
            try {
                const responseCategorias = await fetch('https://alura-flix-api-five.vercel.app/categoria');
                if (!responseCategorias.ok) {
                    throw new Error('Error al cargar las categorías');
                }
                const dataCategorias = await responseCategorias.json();
                setCategorias(dataCategorias); // Actualiza las categorías en el contexto
            } catch (error) {
                console.error('Error al cargar las categorías:', error);
            }
        };

        fetchVideos(); // Llama a la función fetchVideos al montar el componente
        fetchCategorias(); // Llama a la función fetchCategorias al montar el componente

        // Es buena práctica cancelar cualquier suscripción o limpieza en useEffect
        return () => {
            // Código de limpieza si es necesario
        };
    }, [setVideos, setCategorias]); // Dependencias: setVideos y setCategorias para actualizar cuando cambien

    return (
        <div className={styles.container}>
            {categorias.map((cat) => {
                const videosFiltrados = videos.filter((video) => video.categoria === cat.nombre);
                return (
                    <div key={cat.id} className={styles.categorySection}>
                        <Titulo {...cat}>{cat.nombre}</Titulo>
                        <div className={styles.videoContainer}>
                            {videosFiltrados.length > 0 ? (
                                videosFiltrados.map((video) => (
                                    <div className={styles.snapItem} key={video.id}>
                                        <Card {...video} color={cat.color}>
                                            <Pie video={video} key={video.id} />
                                        </Card>
                                    </div>
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
