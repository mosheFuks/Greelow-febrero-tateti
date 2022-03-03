import './home.css'
import { useContext } from 'react'
import { Context } from '../../store/appContext'
import Inicio from '../Inicio/inicio'
import Juego from '../Juego/juego'

const Home= () => {
    const { datosIngresados } = useContext(Context)

    return (
        <div className='container-fluid bg-primary' style={{height: "720px"}}>
            <div className='d-flex justify-content-center' style={{paddingBottom: "70px"}}>
                <div>
                    <h1 className='title'>TikTakToe in React.js</h1>
                </div>
            </div>
            <div className='d-flex align-items-center'>

            {!datosIngresados ?

                    <Inicio />
                :

                    <Juego />


            }
        </div>
       </div>
    );
}
 
export default Home;