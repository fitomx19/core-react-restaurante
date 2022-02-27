import React ,{useContext,useEffect,useState} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import FooterUsers from '../../components/FooterUsers';
import PrecioPaquetes from '../../components/precioPaquetes'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import clienteAxios from "../../config/axios";
import PayPhoto from '../../images/payment.png'
import Spinner from '../../images/spinner.svg'
import NavBar from '../../components/user/utilities/navbar';
import ProfileBase from '../../components/user/utilities/profileBase';
const Perfil = () => {
    
    const stripePromise = loadStripe("pk_test_51KLcDUDV2LPLClKXi7zSh5NXmWq75yCR1PXLVWryVHrakIEM2k9xMrIvWSsVfi4ZvQZEdP0zUVs1sKDGyXS2QpDP00ewtUPXDR")

    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion,usuarioAutenticado } = authContext;

    const [cantidad,setCantidad] = useState(0);
    const [mensaje,setMensaje] = useState("");
    const [vision,setVision] = useState(false);
    
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
      }, []);

    return ( 
    <>
    <NavBar/>
    <div>
        <div className="fixed bottom-4 right-4 xl:right-20">
          <a href="" target="_blank" className="transform duration-500  text-white ease-in-out animate-bounce bg-green-400 px-4 py-3 font-mono font-semibold rounded-lg shadow hover:shadow-xl flex justify-between items-center gap-4">
            WhatsApp
          </a>
        </div>
    </div>
                  {/*manejador de alertas*/}

                  <div className="py-5 px-8">
                  {usuario? <ProfileBase user={usuario}/>:null}
                  </div>
            
                  <FooterUsers/>
    </> 
    );
}
 
export default Perfil;