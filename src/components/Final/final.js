import './final.css'
import {useState, useContext} from 'react'
import { Context } from '../../store/appContext'

const Final = () => {
    const {letraGanadora} = useContext(Context)

    return (
        <>
        {letraGanadora == "X" && fichaJug1 == "X"?

        

        }
        <div className='container-fluid primerDom' style={{width: "800px", height: "500px",  paddingTop: "10px"}}>
            <p className="mensajeFinal">Aca va el ganador: {letraGanadora}</p>
        </div>
        </>
        
    );
}
 
export default Final;