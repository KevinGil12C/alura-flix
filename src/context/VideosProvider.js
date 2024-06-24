import { createContext, useContext, useState } from "react";

export const VideosContext = createContext();

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [formulario, setFormulario] = useState({
        title: "",
        categoria: "",
        capa: "",
        enlace: "",
        descripcion: ""
    });

    return (
        <VideosContext.Provider value={{
            videos,
            setVideos,
            categorias,
            setCategorias,
            formulario,
            setFormulario
        }}>
            {children}
        </VideosContext.Provider>
    );
}
