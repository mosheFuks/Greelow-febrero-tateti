import './segmento.css'
import { useContext, useState } from 'react'
import { Context } from '../../../store/appContext'

const Segmento = () => {
    const [prueba, setPrueba] = useState("")
    const { posiciones } = useContext(Context)

    const probando = (event) => {  
        //let pos = posiciones.find (po => po.id == id)
        var target = event.target
        console.log('target', target)
    }

    return (
        <>
        <div className='col lastCols' id="1" onClick={() => probando("1")}>
            <p>{prueba}</p>
        </div>
        <div className='col lastCols' id="2" onClick={() => probando("2")}>
            <p>{prueba}</p>
        </div>
        <div className='col' id="3" onClick={() => probando("3")}>
            <p>{prueba}</p>
        </div>
        </>
    );
}
 
export default Segmento;