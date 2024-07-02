import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VideosContext } from "./VideosProvider.js";
import Swal from 'sweetalert2';

export function useVideosContext() {
    const context = useContext(VideosContext);
    if (!context) {
        throw new Error("useVideosContext must be used within a VideosProvider");
    }

    const { videos, setVideos, categorias, setCategorias, formulario, setFormulario } = context;
    const navigate = useNavigate();

    const agregar = (nuevoVideo) => {
        fetch("https://alura-flix-api-five.vercel.app/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoVideo),
        })
        .then(response => response.json())
        .then(data => {
            setVideos([...videos, data]); // Actualiza el estado de los videos
            setFormulario({
                title: "",
                categoria: "",
                capa: "",
                enlace: "",
                descripcion: ""
            });

            // Mostrar alerta de éxito con SweetAlert2
            Swal.fire({
                title: 'Video Agregado',
                text: 'El video ha sido agregado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

            navigate("/"); // Redirige a la página principal
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    const actualizar = (videoId, videoActualizado) => {
        // Mostrar alerta de confirmación para actualizar con SweetAlert2
        Swal.fire({
            title: 'Actualizar Video',
            text: '¿Estás seguro de que quieres actualizar este video?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, actualizar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://alura-flix-api-five.vercel.app/videos/${videoId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(videoActualizado),
                })
                .then(response => response.json())
                .then(data => {
                    const nuevosVideos = videos.map(video => 
                        video.id === videoId ? data : video
                    );
                    setVideos(nuevosVideos); // Actualiza el estado de los videos
                    setFormulario({
                        title: "",
                        categoria: "",
                        capa: "",
                        enlace: "",
                        descripcion: ""
                    });

                    // Mostrar alerta de éxito con SweetAlert2
                    Swal.fire({
                        title: 'Video Actualizado',
                        text: 'El video ha sido actualizado correctamente.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        navigate("/");
                        
                    });
                })
                .catch(error => {
                    console.error("Error:", error);
                });
            }
        });
    };

    const borrar = async (videoId) => {
        try {
            const result = await Swal.fire({
                title: 'Eliminar Video',
                text: '¿Estás seguro de que quieres eliminar este video?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });

            if (result.isConfirmed) {
                await fetch(`https://alura-flix-api-five.vercel.app/videos/${videoId}`, {
                    method: "DELETE"
                });
                const nuevosVideos = videos.filter(video => video.id !== videoId);
                setVideos(nuevosVideos); // Actualiza el estado de los videos

                // Mostrar alerta de éxito con SweetAlert2
                Swal.fire({
                    title: 'Video Eliminado',
                    text: 'El video ha sido eliminado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    navigate("/");
                    
                });
            }
        } catch (error) {
            alert(error);
        }
    };

    return {
        videos,
        setVideos,
        categorias,
        setCategorias,
        formulario,
        setFormulario,
        agregar,
        actualizar,
        borrar
    };
}
