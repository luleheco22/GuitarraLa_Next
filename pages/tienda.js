import axios from 'axios'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
const Tienda = ({guitarras}) => {

  return (
    <div> 
        
        <Layout
         page='Tienda Virtual'
        >
          <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

          <Listado
          guitarras={guitarras}
          />

          </main>
        </Layout>

          

    </div>
  )
}


export async function getServerSideProps(){
  const url=`${process.env.API_URL}/guitarras?_sort=precio:asc`
  const response=await axios.get(url)
  const guitarras=response.data
   
   return{
     props:{
        guitarras
     }
   }  

}

export default Tienda