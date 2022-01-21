import React, {useEffect,useState,useContext} from 'react'
import ModalDias from './modalDias';
import MenuContext from '../../context/menu/menuContext'

const Pedidos = (usuario) => {
    const [fin, setFinSemana] = useState(false);
    const menuContext = useContext(MenuContext);
    const { mostrarMenu,menu } = menuContext;
    const [numeroDia,setNumeroDia] = useState("");
    let {nombre,meta,genero,telefono,email} = usuario.usuario

    var diasArray = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    const fecha = () => {
        //let options = { weekday: 'long'};
        let nuevaFecha = new Date()
        //return `${newDate.toLocaleDateString("es-MX", options)}`
        return  `${nuevaFecha}`
    }
    
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
        return (
     
            <>
            <div class="flex flex-wrap">
             {dias.map((item, index) => (
       <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  h-50  md:flex-auto">
          <div class="bg-green-400 text-white items-center text-center ml-2 rounded-2xl border border-gray-50">
             <p class="font-bold pt-2 pb-2 text-2xl"> {diasArray[item]}</p>
             <div class="bg-white text-black">
             {[item] >= numeroDia ? 
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

    //aqui va a ir el controlador de los dias para agregar al state

    const [showModalPedido, setshowModalPedido] = React.useState(false);

    const [AuxDia, setAuxDia] = React.useState("");


    const modalWindow = (item) =>{
        console.log(item)
        setAuxDia(item)
        setshowModalPedido(true)
    }

    const [selectPlatillo , seleccionarComidaDia] = useState("")
    
    const mostrarComidaDia = (e) =>{
      
      const result = menu.filter(word => word._id === e);
      seleccionarComidaDia(result)
     
    }

    const [NumeroBebida,setNumeroBebida] = useState(0)

    const agregarBebida = () =>{
     console.log("e")
     if(NumeroBebida <= 0){
      setNumeroBebida(0)
     }else{
      setNumeroBebida(NumeroBebida-1)
     }
     console.log(NumeroBebida)
    }

    const agregarBebida2 = () =>{
      console.log("e")
      if(NumeroBebida >= 10){
       setNumeroBebida(10)
      }else{
       setNumeroBebida(NumeroBebida+1)
      }
      console.log(NumeroBebida)
    }

    useEffect(() => {
       activos()
       mostrarMenu()
      }, []);
    return ( 
        
        <>
        
        Aqui van a ir los pedidos por semanas
        {fin ? 
        <div>
            <p>Realiza tu pedido para iniciar la siguiente semana</p>
            {
                mapDias()
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
                    <h3 className="text-3xl  sm:text-green-500  md:pt-5 font-semibold">
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
        <option >Elige tu platillo!</option>
        {menu.map(e =>
      <option key={e._id} value={e._id}>{e.nombre}</option>
        )};
    </select>
    </div>
    </div>
    <div>
          {
            !selectPlatillo ? <p>Selecciona un platillo</p> : 
            <>
            <div className="flex flex-wrap items-center">
                <div className="w-1/2 right-20"><img className='w-25' src={selectPlatillo[0].url}/></div>
                <div className="w-1/2 pl-20">Informacion nutrimental</div>
            </div>
            <div>
              Inserte aqui los detalles
            </div>
            </>
          }
    </div>
    <div className="text-xl text-center">
            ¿Quieres añadir algo más?
           
<div class=" w-full  justify-center pt-2">
  <div class=" p-6 rounded-lg shadow-lg  text-center bg-white justify-center  flex flex-wrap items-center"> 
  

  <button onClick={() => agregarBebida()} value="bebidas" class="w-10 h-10 rounded-full text-white bg-red-400 flex justify-center items-center">
     -     
</button>
 
 <span
   class="px-4 w-1/3 right-20  text-center py-2  font-semibold text-md flex align-center    ">
   Bebidas $35.00
 </span>
 <button onClick={() => agregarBebida2()} class="w-10 h-10 rounded-full text-white bg-green-500 flex justify-center items-center">
      +
</button>
<div><p>{NumeroBebida}</p></div>
 </div>

</div>
<div class="w-full  pt-2">
  <div class=" p-6 rounded-lg shadow-lg  text-center bg-white justify-center  flex flex-wrap items-center"> 
  

   <div class="w-10 h-10 rounded-full text-white bg-red-400 flex justify-center items-center">
       <p>-</p>
 </div>
  
  <span
    class="px-4 w-1/3 right-20  text-center py-2  font-semibold text-md flex align-center    ">
    Galleta Snack $50
  </span>
  <div class="w-10 h-10 rounded-full text-white bg-green-500 flex justify-center items-center">
       <p>+</p>
 </div>
  </div>
</div>


<div class=" w-full ustify-center pt-2">
    <div class=" p-6 rounded-lg shadow-lg  text-center bg-white justify-center  flex flex-wrap items-center"> 
      

      <div class="w-10 h-10 rounded-full text-white bg-red-400 flex justify-center items-center">
          <p>-</p>
    </div>
      
      <span
        class="px-4 w-1/3 right-20  text-center py-2  font-semibold text-md flex align-center    ">
        100 gramos pollo asado $50
      </span>
      <div class="w-10 h-10 rounded-full text-white bg-green-500 flex justify-center items-center">
          <p>+</p>
    </div>
      </div>
</div>
           

    </div>

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setshowModalPedido(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setshowModalPedido(false)}
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
        </>
     );
}
 
export default Pedidos;
