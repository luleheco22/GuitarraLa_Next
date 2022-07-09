import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Cursos.module.css'

const Cursos = ({cursos}) => {
 
  return (
    <div>
       <Layout
         page='Cursos'
        >
         <main className='contenedor'>
           <h2 className='heading'>Cursos</h2>

           <div >
             {cursos.map(c=>(
                
               <div className={styles.container} key={c.id}>
                   <h2 className='heading'>{c.descripcion}</h2>
                   <Image layout='responsive' width={400} height={150} src={c.imagen.url} alt={` ${c.descripcion} Imagen sobre cursos`}/>
                   <div className={styles.content}>
                   <p className={styles.date}>Fecha inicio {c.Fecha_inicio}</p>
                   <p className={styles.date}>Fecha fin {c.Fecha_fin}</p>    
                   </div>
                   <p className={styles.precio}>Precio: ${c.precio}</p>
               </div>
             ))}
           </div>
         </main>
        </Layout>
    </div>
  )
}

export async function getStaticProps(){
    //estas funciones se corren en el servidor
      const url=`${process.env.API_URL}/cursos-alls`
      const respuesta= await fetch(url)
      const cursos= await respuesta.json()
    
      return {
         props:{
          cursos
         }
       }
    }


export default Cursos


