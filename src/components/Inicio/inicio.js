import './inicio.css'
import { useContext, useState } from 'react'
import { Context } from '../../store/appContext'

const Inicio= () => {
    const {setJugador1, setJugador2, setDatosIngresados, setFichaJug1, fichaJug1} = useContext(Context)

    const comenzarConX = () => {
        setDatosIngresados(true)
        setFichaJug1("X")
        console.log(`J1: ${fichaJug1}`)
    }

    const comenzarConO = () => {
        setDatosIngresados(true)
        setFichaJug1("O")
        console.log(`J1: ${fichaJug1}`)
    }

    return (
        <div className='container-fluid primerDom' style={{width: "800px", height: "500px",  paddingTop: "10px"}}>
            <div className='d-flex justify-content-center' style={{paddingBottom: "50px"}}>
               <h1>PICK YOUR WEAPON!</h1> 
            </div>
            <div className='d-flex justify-content-beettwen justify-content-center'>
                <div className='ingresos'>
                    <input type="text" className="form-control" placeholder="Nombre jugador N 1" aria-label="Nombre" onChange={(e)=>setJugador1(e.target.value)}/>
                </div>
                <div className='ingresos'>
                    <input type="text" className="form-control" placeholder="Nombre jugador N 2" aria-label="Nombre" onChange={(e)=>setJugador2(e.target.value)}/>
                </div>
            </div>
            <div>
            <div className='d-flex justify-content-beettwen' style={{marginTop: "5px"}}>
                <div className='d-flex justify-content-center shadow tamanioFiguras'>
                    <h1 className="figura" style={{color: "red"}} onClick={() => comenzarConX()}>X</h1>
                </div>
                <div className='d-flex justify-content-center shadow tamanioFiguras'>
                    <h1 className="figura" style={{color: "yellow"}} onClick={() => comenzarConO()}>O</h1>
                </div>

            </div>
            </div>
        </div>
    );
}
 
export default Inicio;