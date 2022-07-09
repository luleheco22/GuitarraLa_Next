//import {useRouter} from 'next/router'
import Layout from "../../components/Layout"
import Image from 'next/image'
import {formatDate } from '../../helpers'
import styles from '../../styles/Resultado.module.css'

const ResultadoBlog = ({resultado}) => {
    //const router= useRouter() como acceder a esos parametros 
   // console.log(router.query)
console.log(resultado)
   const {contenido,imagen, published_at,titulo}=resultado[0]

  return (
      <Layout page={titulo}>
    <main className='contenedor'>
     <h1 className='heading'>{titulo}</h1>
      <article className={styles.resultado}>
          <Image layout="responsive" 
          width={800} 
          height={600} 
          src={imagen.url} 
          alt={`Imagen resultado ${titulo} `}/>
          <div className={styles.container}>
              <p className={styles.date}>{formatDate(published_at)}</p>
              <p className={styles.text}>{contenido}</p>
          </div>
      </article>
    </main>
    </Layout>
  )
}


export async function getStaticPaths(){
 const url=`${process.env.API_URL}/blogs`
 const respuesta= await fetch(url)
 const resultados= await respuesta.json()
 const paths=resultados.map(entrada=>({
     params:{url:entrada.url}
 }))

return {
  paths,
  fallback:false
}

}

export async function getStaticProps({params: {url}}){
    const urlBlog=`${process.env.API_URL}/blogs/?url=${url}`
    const respuesta= await fetch(urlBlog)
    const resultado= await respuesta.json()
   
 
    return {
        props:{
          resultado
        }
    }
}

// export async function getServerSideProps({query: {id}}){
//     const url=`http://localhost:1337/blogs/${id}`
//const url=`${process.env.API_URL}/blogs/${id}`
//     const respuesta= await fetch(url)
//     const resultado= await respuesta.json()
   
 
//     return {
//         props:{
//           resultado
//         }
//     }
// }

export default ResultadoBlog