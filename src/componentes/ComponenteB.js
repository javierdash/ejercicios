import {useState} from 'react' 

const ComponenteB = (props) => {
  
  const [conectado, setConectado] = useState(true)

  const handleClick = (e) => {
    e.preventDefault();
    setConectado(!conectado)
  }
  return (
    <>
    <p>{conectado ? "Contacto: " : ""}</p>
    <div>{conectado ? props.contacto.nombre : ""}</div>
    {conectado ? <p>Contacto En Línea</p> : <p>Contacto No Disponible</p>}
    <button style={{marginTop:"20px", height:"30px", padding:"0px 10px"}} onClick={handleClick}>{conectado ? "Conectado" : "conectar"}</button>
    </>
  )
}

export default ComponenteB