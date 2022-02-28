import React,{useState,useRef,Fragment} from 'react'
import exercise from '../../images/exercise.png'
import healthy from '../../images/healthy.png'
import salud from '../../images/salud.png'
import { Dialog, Transition } from '@headlessui/react'


const Paquetes = () => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
  
    return ( 
        <> <div className="text-center">
            <h2 className="mt-2 mb-2  text-3xl ">¿Por donde empezar?</h2>
             <h2 className="mt-2 mb-2  text- ">Sigue uno de nuestros planes alimenticios</h2>
        </div>
            <body class="antialiased bg-gray-100 text-gray-900 font-sans p-6">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">

        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src={exercise} alt=""/>
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">Nuevo</span>
          <h2 class="mt-2 mb-2  font-bold">Plan Alimenticio Fit</h2>
          <p class="text-sm">A traves de el ejercicio y una dieta especializada logra tus objetivos d euna manera eficaz y sana.</p>
          <div class="mt-3 flex items-center">
            <span class="text-sm font-semibold"></span>&nbsp;<span class="font-bold text-xl">1,200.00</span>&nbsp;<span class="text-sm font-semibold">$</span>
          </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-center mb-1">
            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 1 entrega semanal, 10 platillos
          </span>
          <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Envio Gratis
           
          </span>
            <span class="flex items-center py-2 px-2">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Agregar
            </button>
            <button  onClick={()=>setOpen(true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Más informacion
            </button>
            </span>     
        </div>
       
 
      </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 bg-white shadow-md hover:shadow-xl rounded-lg ">
        
        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src={healthy} alt=""/>
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">Más buscado</span>
          <h2 class="mt-2 mb-2  font-bold">Plan Control de peso</h2>
          <p class="text-sm">Manten tu peso ideal y logra tus obejtivos nutricionales, se parte de una comunidad que cuidan de su salud </p>
          <div class="mt-3 flex items-center">
            <span class="text-sm font-semibold"></span>&nbsp;<span class="font-bold text-xl">1,100.00</span>&nbsp;<span class="text-sm font-semibold">$</span>
          </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-center mb-1">
            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 1 entrega semanal, 10 platillos, consulta nutricional.
          </span>
          <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Entrega Gratis
          </span>
          <span class="flex items-center py-2 px-2">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Agregar
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Más informacion
            </button>
            </span>         
        </div>

      </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        
        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src={salud} alt=""/>
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">Nuevo</span>
          <h2 class="mt-2 mb-2  font-bold">Plan Cuidado Salud</h2>
          <p class="text-sm">Tu dieta ideal, diseñada para mantener controlada tus enfermedades cronico degenerativas</p>
          <div class="mt-3 flex items-center">
            <span class="text-sm font-semibold"></span>&nbsp;<span class="font-bold text-xl">1,200.00</span>&nbsp;<span class="text-sm font-semibold">€</span>
          </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-center mb-1">
            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 1 entrega semanal, 10 platillos, consulta nutricional
          </span>
          <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Entrega Gratis
          </span>
          <span class="flex items-center py-2 px-2">

            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Agregar
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Más informacion
            </button>
            </span>         
        </div>
      </div>
        
         
           
       

    </div>
  </div>
</body>
        {/*espacio para un modal*/}
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                     Plan Alimenticio Fit
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                            Puedes escoger entre 40 platillos listos para entregar en la puerta de tu hogar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Ordenar
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
        </>
     );
}
 
export default Paquetes;