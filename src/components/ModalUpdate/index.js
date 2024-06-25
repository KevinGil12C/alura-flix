import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ModalUpdate.module.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import { useVideosContext } from '../../context/CRUD';

Modal.setAppElement('#root'); // Asegúrate de que este ID coincida con el elemento de tu aplicación principal

function ModalUpdate({ modalIsOpen, cerrarModal, handleUpdate, video }) {
    const { categorias, setCategorias, formulario, setFormulario, agregar } = useVideosContext();

    useEffect(() => {
        fetch("http://localhost:3001/categoria")
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            });
    }, [setCategorias]);

    useEffect(() => {
        if (video) {
            // Si hay video, inicializa el formulario con los datos del video
            setFormulario({
                ...formulario,
                categoria: video.categoria  // Inicializa la categoría con video.categoria
            });
        }
    }, [video, setFormulario]);

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
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={cerrarModal}
            contentLabel="Actualizar Información"
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <h2 className={styles.title}>Editar card:</h2>
            <form onSubmit={handleUpdate}>
                {/* Campo Título */}
                {video && (
                    <Campo
                        titulo="Título"
                        placeholder="Título del video"
                        required
                        valor={video.title}
                        setValor={(valor) => manejarCambio("title", valor)}
                    />
                )}

                {/* Lista de Opciones para Categoría */}
                {categorias.length > 0 && (
                    <ListaOpciones
                        titulo="Categoría"
                        valor={formulario.categoria}  // Usa formulario.categoria para reflejar el estado actual
                        setValor={(valor) => manejarCambio("categoria", valor)}
                        categorias={categorias}
                    />
                )}

                {/* Otros Campos */}
                {video && (
                    <Campo
                        titulo="Imagen"
                        placeholder="Link de la imagen"
                        required
                        valor={video.capa}
                        setValor={(valor) => manejarCambio("capa", valor)}
                    />
                )}

                {video && (
                    <Campo
                        titulo="Video"
                        placeholder="Ingrese el enlace del video"
                        required
                        valor={video.enlace}
                        setValor={(valor) => manejarCambio("enlace", valor)}
                    />
                )}

                {video && (
                    <Campo
                        titulo="Descripción"
                        placeholder="Descripción del video"
                        required
                        valor={video.descripcion}
                        setValor={(valor) => manejarCambio("descripcion", valor)}
                    />
                )}

                <button type="submit">Actualizar</button>
                <button type="button" onClick={cerrarModal}>Cancelar</button>
            </form>
        </Modal>
    );
}

export default ModalUpdate;
