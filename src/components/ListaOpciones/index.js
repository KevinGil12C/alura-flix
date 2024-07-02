import styles from "./ListaOpciones.module.css";

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    };

    return (
        <div className={styles.listaOpciones}>
            <label className={styles.label}>
                <span className={styles.text}>{props.titulo}</span>  
                <select value={props.valor} onChange={manejarCambio} className={styles.select} style={{ backgroundColor: `var(${props.color})`,border: `2px solid var(${props.border})`  }}>
                    <option value="" disabled defaultValue hidden>Seleccionar categoría</option>
                    {props.categorias.map((cat) => (
                        <option key={cat.id} value={cat.nombre}>{cat.nombre.toUpperCase()}</option>
                    ))}
                </select>
            </label>
           
        </div>
    );
};

export default ListaOpciones;
