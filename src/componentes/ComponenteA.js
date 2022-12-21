import React from 'react'
import ComponenteB from "./ComponenteB"

const ComponenteA = () => {
  
  const contacto = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
    conectado: true
  }
  
  return (
    <ComponenteB contacto={contacto} />
  )
}

export default ComponenteA