import React from 'react'
import exercise from '../../images/exercise.png'
import healthy from '../../images/healthy.png'
import salud from '../../images/salud.png'

const Paquetes = () => {
    return ( 
        <> <div className="text-center">
            <h2 className="mt-2 mb-2  text-3xl ">¿Por donde empezar?</h2>
             <h2 className="mt-2 mb-2  text- ">Sigue uno de nuestros planes alimenticios</h2>
        </div>
            <body class="antialiased bg-gray-100 text-gray-900 font-sans p-6">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Más informacion
            </button>
            </span>     
        </div>
       
      </a>
      </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
      </a>
      </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
       
      </a>
      </div>
        
         
           
       

    </div>
  </div>
</body>
        </>
     );
}
 
export default Paquetes;