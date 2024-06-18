import styles from "./Boton.module.css"
function Boton({ children, className }) {
    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default Boton;