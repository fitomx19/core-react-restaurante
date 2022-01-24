import React, {useEffect,useState,useContext} from 'react'
import MenuContext from '../../context/menu/menuContext'
import CarritoContext from '../../context/carrito/carritoContext';
import CheckOut from './checkout';

const Pedidos = (usuario) => {
    const [fin, setFinSemana] = useState(false);
    const menuContext = useContext(MenuContext);
    const { mostrarMenu,menu } = menuContext;

 
    const carritoContext = useContext(CarritoContext);
    const { anadirCarrito,carrito } = carritoContext;


    const [numeroDia,setNumeroDia] = useState("");
    let {nombre,meta,genero,telefono,email} = usuario.usuario



    var diasArray = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let auxiliar;
   /* const fecha = () => {
        //let options = { weekday: 'long'};
        let nuevaFecha = new Date()
        //return `${newDate.toLocaleDateString("es-MX", options)}`
        return  `${nuevaFecha}`
    }
    */

    const activos = () =>{
        let nuevaFecha = new Date()
        let dia = nuevaFecha.getDay();
       
        let esFin = (dia === 6) || (dia === 0); 

        setFinSemana(esFin)
        setNumeroDia(dia)
    }

    const mapDias = () =>{
        
        let dias=[]
        for (var i = 1; i < 6; i++) {
            dias.push(i)
            //console.log(i)
        }
        //console.log(dias)
    
      const mapRecorrer = (dato) =>{
        let filtrado = carrito.filter(e => e.numero_dia == dato)
        
        return `<p>${filtrado}</p>`
      }
        return (
     
            <>
            <div class="flex flex-wrap">
             {dias.map((item, index) => (
       <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  h-50  md:flex-auto">
          <div class="bg-green-400 text-white items-center text-center ml-2 rounded-2xl border border-gray-50">
             <p class="font-bold pt-2 pb-2 text-2xl"> {diasArray[item]}</p>
             <div class="bg-white text-black">
             {[item] > numeroDia ? 
                <div className="pt-6 pb-6">
                 
                 <button  onClick={() => modalWindow(item)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" >Ordena ahora  <p className="text-2xl inline">😋</p></button>
                 
                 </div> :
                 <div className="pt-6 pb-6">
                      <button  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed">No disponible</button>
                 </div>
                  }
             </div>
          </div>
       </div>
      
             ))}
              </div>
            </>
       
        )
    }

    const mapDiasFin = () =>{
        
      let dias=[]
      for (var i = 1; i < 6; i++) {
          dias.push(i)
          //console.log(i)
      }

      const mapRecorrer = (dato) =>{
        //console.log(dato)
        let filtrado = carrito.filter(e => e.numero_dia === dato)
        
        return filtrado.length
      }
      //console.log(dias)
  
      return (
   
          <>
          <div class="flex flex-wrap">
           {dias.map((item, index) => (
     <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  h-50  md:flex-auto">
        <div class="bg-green-400 text-white items-center text-center ml-2 rounded-2xl border border-gray-50">
           <p class="font-bold pt-2 pb-2 text-2xl"> {diasArray[item]}</p>
           <div class="bg-white text-black">
          
              <div className="pt-6 pb-6">
               
                  <button  onClick={() => modalWindow(item)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" > {mapRecorrer(item) >=1 ? <p className="inline">Modificar pedido</p> : <p className="inline">Ordena ahora</p>} <p className="text-2xl inline">😋</p></button>
                 
               </div> 
             
                
           </div>
        </div>
     </div>
    
           ))}
            </div>
          </>
     
      )
  }

    //aqui va a ir el controlador de los dias para agregar al state

    const [showModalPedido, setshowModalPedido] = React.useState(false);

    const cerrarModal = () =>{
      setshowModalPedido(false)
      setNumeroBebida(0)
      setNumeroGalleta(0)
      setNumeroPollo(0)
      
    }

    const guardarInformacionModal = (e) =>{
     

      let informacion = {}
      var filtro = carrito.filter(function(f) {
        return f.numero_dia != e; 
      });

      console.log(filtro)

      informacion = {
            pedido: selectPlatillo,
            numero_dia:e,
            extras:{
                snack:NumeroGalleta,
                pollo:NumeroPollo,
                bebida:NumeroBebida


            }
      }

   
        if(filtro.length==0){
          //eliminar el pedido anteriormente realizado
          console.log("no hay busqueda")
          try {
           
            anadirCarrito([...carrito,informacion])
            setshowModalPedido(false)
            setNumeroBebida(0)
            setNumeroGalleta(0)
            setNumeroPollo(0)
            //alert
          } catch (error) {
            console.log(error)
            setshowModalPedido(false)
            setNumeroBebida(0)
            setNumeroGalleta(0)
            setNumeroPollo(0)
          }
        }else{
            console.log("si hay busqueda")
            //anadirCarrito(filtro)
            anadirCarrito([...filtro,informacion])
            setshowModalPedido(false)
            setNumeroBebida(0)
            setNumeroGalleta(0)
            setNumeroPollo(0)
           
        }

    }

    const [AuxDia, setAuxDia] = React.useState("");


    const modalWindow = (item) =>{
        //console.log(item)
        setAuxDia(item)
        setshowModalPedido(true)
        seleccionarComidaDia("")
    }

    const [selectPlatillo , seleccionarComidaDia] = useState("")
    
    const mostrarComidaDia = (e) =>{
      
      const result = menu.filter(word => word._id === e);
      seleccionarComidaDia(result)
     
    }

    const [NumeroBebida,setNumeroBebida] = useState(0)
    const [NumeroGalleta,setNumeroGalleta] = useState(0)
    const [NumeroPollo,setNumeroPollo] = useState(0)

    const agregarBebida = () =>{
     
     if(NumeroBebida <= 0){
      setNumeroBebida(0)
     }else{
      setNumeroBebida(NumeroBebida-1)
     }
     //console.log(NumeroBebida)
    }

    const agregarBebida2 = () =>{
      
      if(NumeroBebida >= 10){
       setNumeroBebida(10)
      }else{
       setNumeroBebida(NumeroBebida+1)
      }
      //console.log(NumeroBebida)
    }




    const agregarGalleta = () =>{
      
      if(NumeroBebida <= 0){
        setNumeroGalleta(0)
      }else{
        setNumeroGalleta(NumeroGalleta-1)
      }
      //console.log(NumeroGalleta)
     }
 
     const agregarGalleta2 = () =>{
       
       if(NumeroBebida >= 10){
        setNumeroGalleta(10)
       }else{
        setNumeroGalleta(NumeroGalleta+1)
       }
       //console.log(NumeroGalleta)
     }


     const agregarPollo = () =>{
      
      if(NumeroBebida <= 0){
        setNumeroPollo(0)
      }else{
        setNumeroPollo(NumeroPollo-1)
      }
      //console.log(NumeroPollo)
     }
 
     const agregarPollo2 = () =>{
       
       if(NumeroBebida >= 10){
        setNumeroPollo(10)
       }else{
        setNumeroPollo(NumeroPollo+1)
       }
       //console.log(NumeroPollo)
     }



    useEffect(() => {
       activos()
       mostrarMenu()
      }, []);
    return ( 
        
        <>
        
        Aqui van a ir los pedidos por semanas
        {fin === true ? 
        <div>
            <p>Realiza tu pedido para iniciar la siguiente semana</p> 
            {
                mapDiasFin()
                
            }
        </div>
        
        
        : 
        <div>
            {
             mapDias() 
            }    
        </div>}  
        {
            showModalPedido ? 
            
            <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto  max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl  sm:text-green-500  pt-12 font-semibold">
                      Selecciona tu comida de el {AuxDia ? <p className='inline'>{diasArray[AuxDia]}</p>: null}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setshowModalPedido(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                   

                  <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select 
      onChange={e => mostrarComidaDia(e.target.value)}
      class="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      
      focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" aria-label=".form-select-lg example">
        <option value="">Elige tu platillo!</option>
        {menu.map(e =>
      <option key={e._id} value={e._id}>{e.nombre}</option>
        )};
    </select>
    </div>
    </div>
    <div>
          {
            !selectPlatillo ? 
            <div className="flex flex-wrap items-center">
              <div className="w-full right-20"><img className='w-25' src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
              
            </div>
            : 
            <>
            <div className="flex flex-wrap items-center">
                <div className="w-1/2 right-20"><img className='w-25' src={selectPlatillo[0].url}/></div>
                <div className="w-1/2 pl-20">Informacion nutrimental</div>
            </div>
            <div>
                  Detalles de Pedido: 
            </div>
            </>
          }
    </div>
    <div className="text-xl text-center">
            ¿Quieres añadir algo más?
           
<div class=" w-full  justify-center pt-2">
  <div class="  rounded-lg   text-center bg-white justify-center  flex flex-wrap items-center"> 
  

  <button onClick={() => agregarBebida()} value="bebidas" class="w-10 h-10 rounded-full text-white bg-red-400 flex justify-center items-center">
     -     
</button>
 
 <span
   class="px-4 w-1/3 right-20  text-center py-2  font-semibold text-md flex ">
   Bebidas $35.00
  
 </span>
 <button onClick={() => agregarBebida2()} class="w-10 h-10 rounded-full text-white bg-green-500 flex justify-center items-center">
      +
</button>

 </div>
          <div className="flex justify-center">
          <span
    class="px-4 py-2 rounded-full text-white bg-green-400 font-semibold text-md flex pt-2 align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    {NumeroBebida}
  </span>
          </div>
</div>

<div class="w-full  pt-2">
  <div class="  rounded-lg   text-center bg-white justify-center  flex flex-wrap items-center"> 
  

   <button onClick={() => agregarGalleta()} class="w-10 h-10 rounded-full text-white bg-red-400 flex justify-center items-center">
       -
 </button>
  
  <span
    class="px-4 w-1/3 right-20  text-center py-2  font-semibold text-md flex align-center    ">
    Galleta Snack $50
  </span>
  <button onClick={() => agregarGalleta2()} class="w-10 h-10 rounded-full text-white bg-green-500 flex justify-center items-center">
       +
 </button>
  </div>
  <div className="flex justify-center">
          <span
    class="px-4 py-2 rounded-full text-white bg-green-400 font-semibold text-md flex pt-2 align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    {NumeroGalleta}
  </span>
          </div>
</div>


<div class=" w-full ustify-center pt-2">
    <div class="  rounded-lg   text-center bg-white justify-center  flex flex-wrap items-center"> 
      

      <button onClick={()=> agregarPollo()}class="w-10 h-10 rounded-full text-white bg-red-400 flex justify-center items-center">
        -
    </button>
      
      <span
        class="px-4 w-1/3 right-20  text-center py-2  font-semibold text-md flex align-center">
        100 gramos pollo asado $50
      </span>
      <button onClick={()=> agregarPollo2()} class="w-10 h-10 rounded-full text-white bg-green-500 flex justify-center items-center">
         +
    </button>
      </div>
</div>
<div className="flex justify-center">
          <span
    class="px-4 py-2 rounded-full text-white bg-green-400 font-semibold text-md flex pt-2 align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    {NumeroPollo}
  </span>
          </div> 

    </div>

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => cerrarModal() }
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => guardarInformacionModal(AuxDia)}
                    >
                     Guardar cambios
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
            
            
            : null
        }  

        {carrito.length >= 1 ? <CheckOut/> :null} 
        </>
     );
}
 
export default Pedidos;
