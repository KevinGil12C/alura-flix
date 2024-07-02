import styles from "./Campo.module.css";

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`;
    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    };

    return (
        <div className={styles.campo} >
            <label>
                <span className={styles.text}>{props.titulo}</span>
                <input 
                    placeholder={placeholderModificado} 
                    required={props.required} 
                    value={props.valor}
                    onChange={manejarCambio}
                    type={type}
                    style={{ backgroundColor: `var(${props.color})`,border: `2px solid var(${props.border})` }}
                    />
            </label>
        </div>
    );
};

export default Campo;
