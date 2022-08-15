import './final.css'
import {useState, useContext} from 'react'
import { Context } from '../../store/appContext'

const Final = () => {
    const {letraGanadora, jugador1, jugador2, fichaJug1, setHayGanador, posiciones, setTurnoJug1, hayEmpate, setCantPosMarcadas} = useContext(Context)
    let jugGanador;

    const restart = () => {
        for(let i = 0; i < posiciones.length;  i++){
            posiciones[i].simbolo = ''
        }
        setTurnoJug1(true)
        setHayGanador(false)
        setCantPosMarcadas(1)
    }

    const fijarGanador = () => {
        if(letraGanadora === "X" && fichaJug1 === "X") {
            jugGanador = jugador1
        } if (letraGanadora === "O" && fichaJug1 === "O") {
            jugGanador = jugador1
        } if (letraGanadora === "X" && fichaJug1 === "O") {
            jugGanador = jugador2
        } if (letraGanadora === "O" && fichaJug1 === "X") {
            jugGanador = jugador2

        } 
        return jugGanador;
    }

    fijarGanador()

    return (
        <>
        <div className='container-fluid primerDom' style={{width: "800px", height: "500px",  paddingTop: "10px"}}>
            {hayEmpate?
                <div className='text-center'>
                    <p className="mensajeFinal">Hay Empate</p>
                </div>
            :
                <>
                <div className='text-center'>
                    <p className="mensajeFinal">The winner is:</p>
                </div><div className='text-center'>
                    <p className="jugGan">{jugGanador}</p>
                </div>
                </>

            }
            <div className='d-flex justify-content-center'>
                <button className="btn btn-success" onClick={() => restart()}>Play Again</button>
            </div>
        </div>

        </>
        
    );
}
 
export default Final;