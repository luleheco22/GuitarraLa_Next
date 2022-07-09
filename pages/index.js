import Listado from '../components/Listado'
import Layout from '../components/Layout'
import axios from 'axios'
import Curso from '../components/Curso'
import Resultado from '../components/Resultado'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras,curso,resultados}) {
  
  return (
        <Layout
          page='Inicio'
          guitarra={guitarras[3]}
        >

       <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado guitarras={guitarras} />
       </main>

       <Curso
       curso={curso}
       />
       <section className='contenedor'>
       <ListadoBlog
       resultados={resultados}
       />
       </section>





        </Layout>
           



  
  )
}


export async function getServerSideProps(){
 
  const urlGuitarras=`${process.env.API_URL}/guitarras`
  const urlCursos=`${process.env.API_URL}/cursos`
  const urlBlog=`${process.env.API_URL}/blogs?_limit=3`

  const [resGuitarras,resCursos,resBlog]=await Promise.all([
    axios.get(urlGuitarras),
    axios.get(urlCursos),
    axios.get(urlBlog)
    
  ])
  const [guitarras,curso,resultados]= await Promise.all([
    resGuitarras.data,
    resCursos.data,
    resBlog.data

  ])
   
   return{
     props:{
        guitarras,
        curso,
        resultados
     }
   }  

}
