import React, {useEffect,useState,useContext} from 'react'
import CarritoContext from '../../context/carrito/carritoContext';


const CheckOut = () => {
  const carritoContext = useContext(CarritoContext);
  const { carrito } = carritoContext;
  var diasArray = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];


    console.log(carrito)
    return ( 
       <div className=" flex content-center justify-center">
         <div className="hidden lg:flex  lg:justify-between lg:items-center">
         <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Tu pedido</div>
    <p class="text-gray-700 text-base">
    {carrito.map((c, index) => 
      <div className="">
         <p className="text-center pt-2 font-medium">
         {diasArray[c.numero_dia]}
         </p>
        {
          c.pedido? 
          <p className="bg-inherit">
          <p className="font-bold ">{c.pedido[0].nombre}</p>
          </p> : null
        }
        {
          c.extras? 
          <>
          <p className="">¿Extras?  Si!</p> 
          {c.extras.bebida != 0 ?  <p className="inline">Bebida 225ml: <b>{c.extras.bebida}</b> </p>  : null }
          {c.extras.pollo != 0 ?  <p className="inline">Pollo 100g: <b>{c.extras.pollo}</b> </p>  : null }
          {c.extras.snack != 0 ?  <p className="inline">Snacks 50g: <b>{c.extras.snack}</b> </p>  : null }
          </>
         

         : null
        }
        
      </div>)}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tu pedido tiene envio gratis!</span>
    
  </div>
  <div className="flex content-center justify-center pb-5">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">¡Finalizar!</button>
  </div>
</div>
        </div>

      <div className=" lg:hidden">
            lo mismo de arriba pero chiquito
      </div>
    </div>

     );
}
 
export default CheckOut;