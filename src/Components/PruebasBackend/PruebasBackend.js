import axios from 'axios'
import React from 'react'

const PruebasBackend = () => {

  const getDatos = async () => {
    const { data } = await axios.get('http://localhost:8000/obtener-info')
    console.log(data)
   
  }

  const enviarData = () => {
    axios.post('http://localhost:8000/enviar-info', {
      nombre: 'Nicolas',
      apellido: 'Cabre'
    })
      .then((response) => {
      console.log(response.data)
    })
  }

  // getDatos()

  return (
    <>
      <h1 className='text-center'>Pruebas Backend</h1>
      <div className="d-flex justify-content-center gap-1">
      <button className='btn btn-info' onClick={getDatos}>Obtener info</button>
      <button className='btn btn-info' onClick={enviarData}>Enviar info</button>
      </div>
    </>
  )
}

export default PruebasBackend