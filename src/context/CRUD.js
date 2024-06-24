import { useContext } from "react";
import { VideosContext } from "./VideosProvider.js";

export function useVideosContext() {
    const context = useContext(VideosContext);
    if (!context) {
        throw new Error("useVideosContext must be used within a VideosProvider");
    }

    const { videos, setVideos, categorias, setCategorias, formulario, setFormulario } = context;

    const agregar = (nuevoVideo) => {
        fetch("http://localhost:3001/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoVideo),
        })
        .then(response => response.json())
        .then(data => {
            setVideos([...videos, data]);
            setFormulario({
                title: "",
                categoria: "",
                capa: "",
                enlace: "",
                descripcion: ""
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return {
        videos,
        setVideos,
        categorias,
        setCategorias,
        formulario,
        setFormulario,
        agregar
    };
}
