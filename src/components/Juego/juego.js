import './juego.css'
import {useContext} from 'react'
import { Context } from '../../store/appContext'
import Final from '../Final'



const Juego = () => {
    const { fichaJug1, posiciones, hayGanador, setHayGanador, setLetraGanadora, turnoJug1, setTurnoJug1, setHayEmpate  } = useContext(Context)
    let fichaJug2 = ''
    let cantPosMarcadas = 0;

    /*1) Toma la posicion segun el id que se pasa por parametro
      2) Si es el turno del Jug1 (turnoJug1 = true) cambia pos.simbolo a la ficha que haya elegido el jug1 y setea que el turno del jug1 es false, porq ya jugo.
      3) Si no es el turno del jug1 (turnoJug1 = false) se fija que ficha tiene el jug1, toma la contraria y se la pone a pos.simbol, luego setea turnoJug1 a true, porq ya tiene que volver a jugar el  */
    const marcarPosicion = (id) => { 
        let pos = posiciones.find(po => po.id == id)
        cantPosMarcadas++;
        if(turnoJug1){
            pos.simbolo = fichaJug1
            pos.marcada = true
            console.log(pos.simbolo)
            setTurnoJug1(false)
            comprobarGanadorX()
            comprobarGanadorO()
            comprobarEmpate()
        } else {
            if(fichaJug1 == "X"){
                fichaJug2 = "O"
                pos.simbolo = fichaJug2
                pos.marcada = true
            } else {
                fichaJug2 = "X"
                pos.simbolo = fichaJug2
                pos.marcada = true
            }
            setTurnoJug1(true)
            comprobarGanadorX()
            comprobarGanadorO()
            comprobarEmpate()
        }
        console.log(pos)
    }

    const comprobarGanadorX = () => {
        if (posiciones[0].simbolo == "X" && posiciones[1].simbolo == "X" && posiciones[2].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        } if (posiciones[3].simbolo == "X" && posiciones[4].simbolo == "X" && posiciones[5].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        } if (posiciones[6].simbolo == "X" && posiciones[7].simbolo == "X" && posiciones[8].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        }if (posiciones[0].simbolo == "X" && posiciones[3].simbolo == "X" && posiciones[6].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        } if (posiciones[1].simbolo == "X" && posiciones[4].simbolo == "X" && posiciones[7].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        } if (posiciones[2].simbolo == "X" && posiciones[5].simbolo == "X" && posiciones[8].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        } if (posiciones[0].simbolo == "X" && posiciones[4].simbolo == "X" && posiciones[8].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        } if (posiciones[2].simbolo == "X" && posiciones[4].simbolo == "X" && posiciones[6].simbolo == "X" ){
            setHayGanador(true)
            setLetraGanadora("X")
        }
        return hayGanador
    }

    const comprobarGanadorO = () => {
        if (posiciones[0].simbolo == "O" && posiciones[1].simbolo == "O" && posiciones[2].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        } if (posiciones[3].simbolo == "O" && posiciones[4].simbolo == "O" && posiciones[5].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        } if (posiciones[6].simbolo == "O" && posiciones[7].simbolo == "O" && posiciones[8].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        }if (posiciones[0].simbolo == "O" && posiciones[3].simbolo == "O" && posiciones[6].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        } if (posiciones[1].simbolo == "O" && posiciones[4].simbolo == "O" && posiciones[7].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        } if (posiciones[2].simbolo == "O" && posiciones[5].simbolo == "O" && posiciones[8].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        } if (posiciones[0].simbolo == "O" && posiciones[4].simbolo == "O" && posiciones[8].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        } if (posiciones[2].simbolo == "O" && posiciones[4].simbolo == "O" && posiciones[6].simbolo == "O" ){
            setHayGanador(true)
            setLetraGanadora("O")
        }
        return hayGanador
    }

    const comprobarEmpate = () => {
        if(cantPosMarcadas == 9 && !hayGanador){
            for(let i = 0; i < posiciones.length;  i++){
                posiciones[i].simbolo = ''
            }
            setTurnoJug1(true)
            setHayEmpate(true)
        }
    }

    return ( 
        <>
        {!hayGanador?
            <div className='container-fluid domJuego' style={{width: "800px", height: "500px",  paddingTop: "10px"}}>
                <div className='row rows'>
                    <div className='col lastCols' onClick={() => marcarPosicion("1")}>
                        <p className="fichaEnJuego">{posiciones[0].simbolo}</p>
                    </div>
                    <div className='col lastCols' onClick={() => marcarPosicion("2")}>
                        <p className="fichaEnJuego">{posiciones[1].simbolo}</p>
                    </div>
                    <div className='col' onClick={() => marcarPosicion("3")}>
                        <p className="fichaEnJuego">{posiciones[2].simbolo}</p>
                    </div>
                </div>
                <div className='row rows'>
                    <div className='col lastCols' onClick={() => marcarPosicion("4")}>
                        <p className="fichaEnJuego">{posiciones[3].simbolo}</p>
                    </div>
                    <div className='col lastCols' onClick={() => marcarPosicion("5")}>
                        <p className="fichaEnJuego">{posiciones[4].simbolo}</p>
                    </div>
                    <div className='col' onClick={() => marcarPosicion("6")}>
                        <p className="fichaEnJuego">{posiciones[5].simbolo}</p>
                    </div>
                </div>
                <div className='row lastRow'>
                    <div className='col lastCols' onClick={() => marcarPosicion("7")}>
                        <p className="fichaEnJuego">{posiciones[6].simbolo}</p>
                    </div>
                    <div className='col lastCols' onClick={() => marcarPosicion("8")}>
                        <p className="fichaEnJuego">{posiciones[7].simbolo}</p>
                    </div>
                    <div className='col' onClick={() => marcarPosicion("9")}>
                        <p className="fichaEnJuego">{posiciones[8].simbolo}</p>
                    </div>
                </div>
            </div>
        :
        
        <Final />
        
        }
        </>
     );
}
 
export default Juego;