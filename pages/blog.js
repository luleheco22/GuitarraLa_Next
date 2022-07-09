
import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({resultados}) => {
  //console.log(resultado) 
  //lo muestra en el terminal en el back



  return (
    <div> 
        
        <Layout
         page='Blog'
        >
         <main className='contenedor'>
            <ListadoBlog
            resultados={resultados}
            />
         </main>
        </Layout>

    </div>
  )
}

export async function getStaticProps(){
//estas funciones se corren en el servidor
  const url=`${process.env.API_URL}/blogs?_sort=created_at:desc`
  const respuesta= await fetch(url)
  const resultados= await respuesta.json()

  return {
     props:{
      resultados
     }
   }
}

export default Blog