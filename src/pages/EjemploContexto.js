import {useState, createContext} from "react";
import Component2 from "../components/Component2";
import Component5 from "../components/Component5";

const UserContext = createContext()

const EjemploContexto = () => {
  
  const [user, setUser] = useState("Javier Dash")
  
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hola ${user}!`}</h1>
      <Component2 user={user} />
      <Component5 />
    </UserContext.Provider>
  )
}

export default EjemploContexto;