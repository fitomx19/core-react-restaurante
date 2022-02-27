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

const Creditos = () => {
    
    const stripePromise = loadStripe("pk_test_51KLcDUDV2LPLClKXi7zSh5NXmWq75yCR1PXLVWryVHrakIEM2k9xMrIvWSsVfi4ZvQZEdP0zUVs1sKDGyXS2QpDP00ewtUPXDR")

    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion,usuarioAutenticado } = authContext;
    console.log(usuario)

    const [cantidad,setCantidad] = useState(0);
    const [mensaje,setMensaje] = useState("");
    const [vision,setVision] = useState(false);
    

    const CheckoutForm = () => {
      const stripe = useStripe();
      const elements = useElements();
      const [loading,setLoading] = useState(false);
    
      

      const handleSubmit = async (e) =>{
        e.preventDefault();
      const {error,paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement)
        });
     
        setLoading(true)

        if(!error){
          const {id} = paymentMethod

            try {
            

              const {data}=  await clienteAxios
              .post(`/api/payment/checkout`, { 
                id,
                amount: cantidad,
                mail:usuario.email,
                idUser:usuario._id,
                owner: {name:'Novo Food'}
              });
              setMensaje(data)
              elements.getElement(CardElement).clear();
            } catch (error) {
              console.log(error)
            }
            setLoading(false)

        }
      }

      return <div >
        <form onSubmit={handleSubmit} >
        <h3><b>{cantidad}</b> Creditos</h3>
        <CardElement/>
        
        <button disabled={!stripe}>
          {loading ?<center><img className="w-6/12" src={Spinner}/></center> : <p className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Comprar</p>}
        </button>
        <p>
          {mensaje ? <p className="text-green-500 font-bold py-2">{mensaje.message}</p> : null}
        </p>
      </form>
      </div>
    }

    const Paquetes =  (precio) =>{
      setCantidad(precio)
      setVision(true)
    }

 

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
      }, []);

    return ( 
    <>
    <NavBar/>
    <div>
                  <meta charSet="UTF-8" />
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Comida!</title>
                  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
                 

                  <div className="fixed bottom-4 right-4 xl:right-20">
                    <a href="" target="_blank" className="transform duration-500  text-white ease-in-out animate-bounce bg-green-400 px-4 py-3 font-mono font-semibold rounded-lg shadow hover:shadow-xl flex justify-between items-center gap-4">
          
                      WhatsApp
                    </a>
                  </div>
                 
                 
                  {/*manejador de alertas*/}

                  {
                    mensaje ? 
                    <div className="py-3">
                    <div class="bg-green-900 text-center py-4 lg:px-4">
                          <div class="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                            <span class="font-semibold mr-2 text-left flex-auto">{mensaje.message}</span>
                            
                            <button  onClick={() => setMensaje("")}> <strong class="text-xl align-center cursor-pointer alert-del"
      >&times;</strong></button>
                          </div>
                    </div>
                    </div>
                    : 
                    null
                  }

                          </div>
                  <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1">
                    <div className="hidden md:block">
                    <div class="mb-4">
                      <img src={PayPhoto} class="max-w-full rounded-full" alt="payment"/>
                    </div>
                    </div>
                   <div className="justify-center"> 
                   <center>
                    <h3 className="text-4xl text-gray-700">Compra tus créditos</h3>
                  <div class="d-flex justify-content-center">
                    <div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      
                        <div class="px-6 py-4">
                       
                          <div class="font-bold text-xl mb-2">800 créditos</div>
                          <p class="text-gray-500 text-base py-1">
                           Perfecto para una semana.
                          </p>
                          <button onClick={()=>Paquetes(800)}
                          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                              Agregar
                          </button>
                        </div>
                      
                      </div>
                    </div>
                    <div>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg py-4">
                        <div class="font-bold  mb-2 text-2xl text-green-700">Más Popular</div>
                        <div class="px-6 py-4">
                          <div class="font-bold text-xl mb-2">1,400 créditos</div>
                          <p class="text-gray-500 text-base py-1">
                          Perfecto para dos semanas.
                          </p>
                         
                          <button onClick={()=>Paquetes(1400)}
                          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                              Agregar
                          </button>
                        </div>
                      
                      </div>
                    </div>
                    <div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        
                        <div class="px-6 py-4">
                          <div class="font-bold text-xl mb-2">2,600 créditos</div>
                          <p class="text-gray-500 text-base py-1">
                          Perfecto para un mes.
                          </p>
                          <button onClick={()=>Paquetes(2600)}
                          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                              Agregar
                          </button>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                  </center>
                  <div>
                        <center>

                        
                       {
                         vision ? 
                         <div  class="text-center align-center max-w-md rounded overflow-hidden shadow-lg py-4 px-4">
                         <Elements stripe={stripePromise}>
                        
                          <div>

                              <CheckoutForm/>
                         </div>
                         </Elements>
                       </div>
                       : null
                       }
                  
                        </center>
                  </div>
                   </div>
                


                  </div>
                  </div>
                  <center>
                   <div className='py-2'>
                    <p>Aviso de Privacidad</p>
                       <p>Dudas y Preguntas</p>
                       <p>Asistencia Pagos</p>
                    </div>
                   </center>
                  <FooterUsers/>
    </> 
    );
}
 
export default Creditos;