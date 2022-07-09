import Guitarra from "./Guitarra"
import styles from '../styles/Listado.module.css'
const Listado = ({guitarras}) => {
  return (
    <div className={styles.listado}>
        {guitarras.map(guitarra=>(
            <Guitarra
            key={guitarra.url}
            guitarra={guitarra}
            img={guitarra.imagen.map((i=>i.url))}
            
            />
        ))}
    </div>
  )
}

export default Listado