import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './ModalUpdate.module.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import { useVideosContext } from '../../context/CRUD';
import cerrar from "./cerrar.png";

Modal.setAppElement('#root'); // Asegúrate de que este ID coincida con el elemento de tu aplicación principal

function ModalUpdate({ modalIsOpen, cerrarModal, video }) {
    const { categorias, setCategorias, actualizar } = useVideosContext();
    const [formulario, setFormulario] = useState({
        title: '',
        categoria: '',
        capa: '',
        enlace: '',
        descripcion: ''
    });

    useEffect(() => {
        fetch("http://localhost:3001/categoria")
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            });
    }, [setCategorias]);

    useEffect(() => {
        if (video) {
            setFormulario({
                title: video.title,
                categoria: video.categoria,
                capa: video.capa,
                enlace: video.enlace,
                descripcion: video.descripcion
            });
        }
    }, [video]);

    const manejarCambio = (campo, valor) => {
        setFormulario({
            ...formulario,
            [campo]: valor
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (video && video.id) {
            actualizar(video.id, formulario);
        }
    };

    const handleClear = () => {
        setFormulario({
            title: '',
            categoria: '',
            capa: '',
            enlace: '',
            descripcion: ''
        });
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={cerrarModal}
            contentLabel="Actualizar Información"
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <img onClick={cerrarModal} className={styles.cerrar} src={cerrar} alt="Cerrar" />

            <form onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <h2 className={styles.title}>Editar card:</h2>
                    <Campo
                        titulo="Título"
                        placeholder="Título del video"
                        required
                        valor={formulario.title}
                        setValor={(valor) => manejarCambio("title", valor)}
                    />

                    {categorias.length > 0 && (
                        <ListaOpciones
                            titulo="Categoría"
                            valor={formulario.categoria}
                            setValor={(valor) => manejarCambio("categoria", valor)}
                            categorias={categorias}
                        />
                    )}

                    <Campo
                        titulo="Imagen"
                        placeholder="Link de la imagen"
                        required
                        valor={formulario.capa}
                        setValor={(valor) => manejarCambio("capa", valor)}
                    />

                    <Campo
                        titulo="Video"
                        placeholder="Ingrese el enlace del video"
                        required
                        valor={formulario.enlace}
                        setValor={(valor) => manejarCambio("enlace", valor)}
                    />

                    <Campo
                        titulo="Descripción"
                        placeholder="Descripción del video"
                        required
                        valor={formulario.descripcion}
                        setValor={(valor) => manejarCambio("descripcion", valor)}
                    />

                    <div className={styles.btnGroup}>
                        <button className={styles.botonHome} type="submit">Guardar</button>
                        <button
                            className={styles.botonNuevoVideo}
                            type="button"
                            onClick={handleClear}
                        >
                            Limpiar
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default ModalUpdate;
