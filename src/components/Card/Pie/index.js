import styles from './Pie.module.css';
import React, { useState } from 'react';
import borrarImg from './delete.png';
import actualizarImg from './update.png';
import ModalUpdate from "../../ModalUpdate";
import { useVideosContext } from '../../../context/CRUD';


function Pie({ video }) {
    const { actualizar, borrar } = useVideosContext();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const abrirModal = () => {
        setModalIsOpen(true);
    };

    const cerrarModal = () => {
        setModalIsOpen(false);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        actualizar(video.id, video);
        cerrarModal();
    };

    const handleDelete = () => {
        if (video && video.id) {
            borrar(video.id);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.delete} onClick={handleDelete}>
                    <img src={borrarImg} alt="Borrar" />
                    <h1>Borrar</h1>
                </div>
                <div className={styles.actualizar} onClick={abrirModal}>
                    <img src={actualizarImg} alt="Actualizar" />
                    <h1>Editar</h1>
                </div>
            </div>

            <ModalUpdate 
                modalIsOpen={modalIsOpen}
                cerrarModal={cerrarModal}
                handleUpdate={handleUpdate}
                video={video}
            />
        </>
    );
}

export default Pie;
