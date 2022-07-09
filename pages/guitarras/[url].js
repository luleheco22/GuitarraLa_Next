import { useState } from 'react'
import axios from 'axios'
import styles from '../../styles/Guitarra.module.css'
import Image from 'next/image'
import Layout from '../../components/Layout'

const Producto = ({guitarra,agregarCarrito}) => {
  const [cantidad, setCantidad]=useState(1)
  const {_id,descripcion,imagen,nombre,precio}=guitarra[0]
 

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    //Agregar el carrito
    if (cantidad<1) {
      alert('Cantidad no válida')
      return
    }
    const guitarraSeleccionada={
      _id,
      imagen:imagen[0].url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
    alert('Producto agregado al carrito')
    return
  }

  return (
    <Layout page={`Guitarra ${nombre}`}>
    <div className={styles.guitarra}>
      <Image layout='responsive' 
      width={180} 
      height={350} 
      src={imagen[0].url} 
      alt={`Imagen Guitarra ${nombre}`}/>
      <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
             <label>Cantidad:</label>

             <select
               value={cantidad}
               onChange={(e)=>setCantidad(parseInt(e.target.value))}
             >
               <option value="0">-- Seleccione</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>

             </select>

             <input
             type='submit'
             value='Agregar al Carrito'
             
             />

          </form>
        
      </div>
      </div>
      </Layout>
  )
}


export async function getServerSideProps({query:{url}}){
     const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
     const respuesta= await axios.get(urlGuitarra)
     const guitarra= await respuesta.data


    return{
        props:{
       guitarra
        }
    }

}



export default Producto