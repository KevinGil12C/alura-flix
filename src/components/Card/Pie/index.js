import styles from './Pie.module.css';
import React, { useState } from 'react';

import borrar from './delete.png';
import actualizar from './update.png';
import ModalUpdate from "../../ModalUpdate/"
function Pie({video}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const abrirModal = () => {
        setModalIsOpen(true);
    };

    const cerrarModal = () => {
        setModalIsOpen(false);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        // Lógica para manejar la actualización
        cerrarModal();
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.delete}>
                    <img src={borrar} alt="Borrar" />
                    <h1>Borrar</h1>
                </div>
                <div className={styles.actualizar} onClick={abrirModal}>
                    <img src={actualizar} alt="Actualizar" />
                    <h1>Editar</h1>
                </div>
            </div>

            <ModalUpdate 
                modalIsOpen={modalIsOpen}
                cerrarModal={cerrarModal}
                handleUpdate={handleUpdate}
                video = {video}
            />
        </>
    );
}

export default Pie;
