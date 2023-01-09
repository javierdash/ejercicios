import {useContext} from 'react'
import {UserContext} from "../pages/EjemploContexto"

const Component5 = () => {
  
  const usuario = useContext(UserContext)

  return (
    <h2>{`Hola ${usuario} nuevamente!`}</h2>
  )
}

export default Component5