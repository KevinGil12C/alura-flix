import { useEffect, useContext } from "react";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import styles from "./Formulario.module.css";
import Boton from "../Boton";
import { useVideosContext } from "../../context/CRUD";



function Formulario() {
    const {
        categorias,
        setCategorias,
        formulario,
        setFormulario,
        agregar
    } = useVideosContext();

    useEffect(() => {
        fetch("http://localhost:3001/categoria")
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            });
    }, [setCategorias]);

    const manejarCambio = (campo, valor) => {
        setFormulario({
            ...formulario,
            [campo]: valor
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregar(formulario);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NUEVO VIDEO</h1>
            <section className={styles.formulario}>
                <form onSubmit={handleSubmit}>
                    <p className={styles.text}>Complete el formulario para crear una nueva tarjeta de video</p>
                    <p className={styles.crear}>Crear Tarjeta</p>
                    <div className={styles.formGroup}>
                        <Campo
                            titulo="Título"
                            placeholder="título del video"
                            required
                            valor={formulario.title}
                            setValor={(valor) => manejarCambio("title", valor)}
                        />
                        <ListaOpciones 
                            titulo="Categoría"
                            valor={formulario.categoria} 
                            setValor={(valor) => manejarCambio("categoria", valor)}
                            categorias={categorias}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <Campo
                            titulo="Imagen"
                            placeholder="link de la imagen"
                            required
                            valor={formulario.capa}
                            setValor={(valor) => manejarCambio("capa", valor)}
                        />
                        <Campo
                            titulo="Video"
                            placeholder="link del video"
                            required
                            valor={formulario.enlace}
                            setValor={(valor) => manejarCambio("enlace", valor)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Campo
                            titulo="Descripción"
                            placeholder="¿De qué se trata este vídeo?"
                            required
                            valor={formulario.descripcion}
                            setValor={(valor) => manejarCambio("descripcion", valor)}
                        />
                    </div>
                    <div className={styles.btnGroup}>
                        <Boton type="submit" className={styles.botonHome}>GUARDAR</Boton>
                        <Boton type="reset" className={styles.botonNuevoVideo} onClick={() => setFormulario({
                            title: "",
                            categoria: "",
                            capa: "",
                            enlace: "",
                            descripcion: ""
                        })}>LIMPIAR</Boton>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Formulario;
