import Resultado from '../components/Resultado'
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({resultados}) => {
   
  return (
    <>
    <h2 className='heading'>Blog</h2>

<div className={styles.blog}>
  {resultados.map(entrada=>(
    <Resultado
      key={entrada._id}
      entrada={entrada}
    />
  ))}
</div>
    </>
  )
}

export default ListadoBlog