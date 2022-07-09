import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <div> 
        
        <Layout
         page='Nosotros'
        >
        <main className='contenedor'>
           <h2 className='heading'>Nosotros</h2>

           <div className={styles.contenido}>
               <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros'/>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum magna. Nunc scelerisque interdum diam et lacinia. Vivamus vel purus cursus, consequat tellus ut, imperdiet nunc. Nunc porta sem egestas turpis molestie dictum.</p>
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum magna. Nunc scelerisque interdum diam et lacinia. Vivamus vel purus cursus, consequat tellus ut, imperdiet nunc. Nunc porta sem egestas turpis molestie dictum.</p>
                </div>   
           </div>
        </main>
        </Layout>

          

    </div>
  )
}

export default Nosotros