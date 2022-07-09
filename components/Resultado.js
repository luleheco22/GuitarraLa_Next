import Link from 'next/link'
import Image from 'next/image'
import {formatDate} from '../helpers'
import styles from '../styles/Resultado.module.css'



const Resultado = ({entrada}) => {
  const {titulo,resumen,imagen,published_at,id,url}=entrada
 
  return (
    <article>

       <Image priority='true' layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />

        <div className={styles.container}>
         <h3>{titulo}</h3>
           <p className={styles.date}>{formatDate(published_at)}</p> 
           <p className={styles.resume}>{resumen}</p>
           <Link href={`/blog/${url}`}>
               <a className={styles.link}>Leer Entrada</a>
               
           </Link>
        </div>
    </article>
  )
}

export default Resultado