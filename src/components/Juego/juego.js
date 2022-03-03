import './juego.css'
import Segmento from './Segmento'



const Juego = () => {

    return ( 
        <div className='container-fluid primerDom ' style={{width: "800px", height: "500px",  paddingTop: "10px"}}>
            <div className='row rows'>
                <Segmento />
            </div>
            <div className='row rows'>
                <Segmento />
            </div>
            <div className='row lastRow'>
                <Segmento />
            </div>
        </div>
     );
}
 
export default Juego;