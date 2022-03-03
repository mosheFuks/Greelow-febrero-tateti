import {useState} from "react"
import { createContext } from "react";

export const Context = createContext(null)

 
const AppProvaider = ({children}) => {
    const [jugador1, setJugador1] = useState("")
    const [jugador2, setJugador2] = useState("")
    const [datosIngresados, setDatosIngresados] = useState(false)
    const [simbolJug1, setSimbolJug1] = useState("")
    const [simbolJug2, setSimbolJug2 ] = useState("")
    const [fichaJug1, setFichaJug1] = useState("")
    const [hayGanador, setHayGanador] = useState(false)
    const [letraGanadora, setLetraGanadora ] = useState("")
    const [posiciones, setPosiciones] = useState([
        {id: "1", simbolo: "", marcada: false}, {id: "2", simbolo: "", marcada: false}, {id: "3", simbolo: "", marcada: false}, {id: "4", simbolo: "", marcada: false}, {id: "5", simbolo: "", marcada: false}, {id: "6", simbolo: "", marcada: false}, {id: "7", simbolo: "", marcada: false}, {id: "8", simbolo: "", marcada: false}, {id: "9", simbolo: "", marcada: false}
    ])

    return (
        <Context.Provider value={{jugador1, setJugador1, jugador2, setJugador2, datosIngresados, setDatosIngresados, simbolJug1, setSimbolJug1, simbolJug2, setSimbolJug2, posiciones, fichaJug1, setFichaJug1, hayGanador, setHayGanador, letraGanadora, setLetraGanadora }}>
            {children}
        </Context.Provider>

    );
}

export default AppProvaider;