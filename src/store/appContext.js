import {useState} from "react"
import { createContext } from "react";

export const Context = createContext(null)

 
const AppProvaider = ({children}) => {
    const [jugador1, setJugador1] = useState("")
    const [jugador2, setJugador2] = useState("")
    const [datosIngresados, setDatosIngresados] = useState(false)
    const [simbolJug1, setSimbolJug1] = useState("")
    const [simbolJug2, setSimbolJug2 ] = useState("")
    const [posiciones, setPosiciones] = useState([
        {id: "1", simbolo: ""}, {id: "2", simbolo: ""}, {id: "3", simbolo: ""}, {id: "4", simbolo: ""}, {id: "5", simbolo: ""}, {id: "6", simbolo: ""}, {id: "7", simbolo: ""}, {id: "8", simbolo: ""}, {id: "9", simbolo: ""}
    ])

    return (
        <Context.Provider value={{jugador1, setJugador1, jugador2, setJugador2, datosIngresados, setDatosIngresados, simbolJug1, setSimbolJug1, simbolJug2, setSimbolJug2, posiciones}}>
            {children}
        </Context.Provider>

    );
}

export default AppProvaider;