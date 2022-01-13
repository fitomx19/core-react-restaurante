import React ,{useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext'
import PasarelaRegistroUno from '../PasarelaRegistroUno';
import Cafe from '../../images/cafe.svg'
import Comida from '../../images/food.svg'
import Dinner from '../../images/dinner.svg'
import Drinks from '../../images/drinks.svg'
import Items from '../../components/items'

const Dashboard = () => {


  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;
  const [showModal2, setModal2] = React.useState(false);
  
  useEffect(() => {
                    usuarioAutenticado();
                    // eslint-disable-next-line
                  },[])

    return ( 
        <>
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
                 
                  <nav className="p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto">
                    <div className="hidden lg:flex lg:justify-between lg:items-center">
                      <a href="#" className="flex items-start gap-2 group">
                        <div className="bg-blue-600 text-white p-2 rounded-md group-hover:bg-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-light uppercase">
                          Comida!
                          <span className="text-base block font-bold tracking-widest">
                            Menú Principal
                          </span>
                        </p>
                      </a>
                      <ul className="flex items-center space-x-4 text-sm font-semibold">
                        <li><a href="#" className="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">Mi cuenta</a></li>
                       
                        <li><a href="#" className="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200">Mis creditos </a></li>
                        <li><a href="#" className="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200">Ayuda</a></li>
                      </ul>
                      <ul className="flex space-x-2 xl:space-x-4 text-sm font-semibold">
                        <li>
                          <a href="#">
                            <div className="p-2 rounded hover:bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                          </a>
                        </li>
                       
                        <li>
                          <a href="#">
                            <div className="p-2 rounded hover:bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul className="flex items-center gap-6">
                        <li>
                          <a href="#" className="text-sm font-sans text-gray-800 font-semibold tracking-wider">
                          {usuario ? <p>{usuario.nombre}</p> : null }
                          </a>
                        </li>
                        <li>
                          <button onClick={() => cerrarSesion()}>
                            <div className="p-2 rounded hover:bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div x-data="{ open: false }" className="lg:hidden relative flex justify-between w-full">
                      <a href="#" className="flex items-start gap-2 group">
                        <div className="bg-blue-600 text-white p-3 rounded-md group-hover:bg-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-light uppercase">
                          Menu Principal
                          <span className="text-base block font-bold tracking-widest">
                            Comida
                          </span>
                        </p>
                      </a>
                      <button  type="button" className="bg-gray-200 p-3 rounded-md">
                        <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        <svg x-show="open" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div x-show="open" x-transition className="absolute top-14 left-0 right-0 w-full bg-white rounded-md border">
                        <ul className="p-4">
                          <li className="px-4 py-2 rounded hover:bg-gray-200">
                            <a href="#" className="flex items-center gap-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              Mi cuenta
                            </a>
                          </li>
                         
                          <li className="px-4 py-2 rounded hover:bg-gray-200">
                            <a href="#" className="flex items-center gap-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              Mis creditos
                            </a>
                          </li>
                          <li className="px-4 py-2 rounded hover:bg-gray-200">
                            <a href="#" className="flex items-center gap-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              Ayuda
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/* End Nav */}
                  {/* Start Main */}
                  <main className="container mx-w-6xl mx-auto py-4">

                  <div className="flex flex-col space-y-8">
                      {/* First Row */}
                      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                        <div className="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                          <div className="flex flex-col space-y-6 md:h-full md:justify-between">
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                <h3>Datos de Salud </h3>
                              </span>
                          </div>
                          <div className="flex gap-2 md:gap-4 justify-between items-center">
                              <div className="flex flex-col space-y-4">
                                <h2 className="text-gray-800 font-bold tracking-widest leading-tight">Indice de masa corporal</h2>
                               
                              </div>
                              <h2 className="text-lg md:text-xl xl:text-3xl text-green-500 font-black tracking-wider">
                                <span className="md:text-xl"></span>
                                23
                              </h2>
                            </div>
                            <div className="flex gap-2 md:gap-4 justify-between items-center">
                              <div className="flex flex-col space-y-4">
                                <h2 className="text-gray-800 font-bold tracking-widest leading-tight">Calorias recomendadas para tu dieta</h2>
                               
                              </div>
                              <h2 className="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                                <span className="md:text-xl"></span>
                                1930
                              </h2>
                            </div>
                            
                             
                          </div>
                          
                          
                        </div>
                        
                        <div className="col-span-2 p-6 rounded-3xl bg-gradient-to-r from-green-500 to-green-300 flex flex-col justify-between">
                          <div className="flex flex-col">
                            <p className="text-white  text-center font-bold text-5xl">PROMOCIONES</p>
                          
                          </div>
                          <div className="flex items-center justify-center">
                            <a href="#" className="bg-green-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-green-200 hover:text-white">
                              Ver más
                            </a>
                            
                          </div>
                        </div>
                     </div>
                     <br></br>
                  </div>

                    <div className="flex flex-col space-y-8">
                      {/* First Row */}
                      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                        <div className="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                          <div className="flex flex-col space-y-6 md:h-full md:justify-between">
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                               Cuenta
                              </span>
                              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Creditos Disponibles
                              </span>
                            </div>
                            <div className="flex gap-2 md:gap-4 justify-between items-center">
                              <div className="flex flex-col space-y-4">
                                <h2 className="text-gray-800 font-bold tracking-widest leading-tight">Cuenta de { usuario ? <p>{usuario.nombre}</p> : null}
                                  </h2>
                               
                              </div>
                              <h2 className="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                                <span className="md:text-xl">$</span>
                                800.00
                              </h2>
                            </div>
                            <div className="flex gap-2 md:gap-4">
                              <a href="#" className="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800">
                                Agregar creditos
                              </a>
                             
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between">
                          <div className="flex flex-col">
                            <p className="text-white font-bold">Menus disponibles</p>
                          
                          </div>
                          <div className="flex items-center justify-center">
                            <a href="#" className="bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white">
                              Ver más
                            </a>
                            
                          </div>
                        </div>
                      </div>
                      {/* End First Row */}
                      <Items/>
                      {/* Start Second Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
                        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
                          <h2 className="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                           Platillos Disponibles</h2>
                          <a href="#" className="text-xs text-gray-800 font-semibold uppercase">Más</a>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-50">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                              <p className="text-xs text-gray-600 tracking-wide">Desayunos</p>
                              <h3 className="mt-1 text-lg text-blue-500 font-bold">$80 creditos</h3>
                              <span className="mt-4 text-xs text-gray-500"></span>
                            </div>
                            <div className="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                              <img src={Cafe} alt="icon-desayuno" className="w-auto h-8 md:h-6 xl:h-8 object-cover" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-50">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                              <p className="text-xs text-gray-600 tracking-wide">Comida</p>
                              <h3 className="mt-1 text-lg text-green-500 font-bold">$80 creditos</h3>
                              <span className="mt-4 text-xs text-gray-500"></span>
                            </div>
                            <div className="bg-green-500 p-2 md:p-1 xl:p-2 rounded-md">
                              <img src={Comida} alt="icon" className="w-auto h-8 md:h-6 xl:h-8 object-cover" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-50">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                              <p className="text-xs text-gray-600 tracking-wide">Cenas</p>
                              <h3 className="mt-1 text-lg text-yellow-500 font-bold">$ 80 creditos</h3>
                              <span className="mt-4 text-xs text-gray-600"></span>
                            </div>
                            <div className="bg-yellow-500 p-2 md:p-1 xl:p-2 rounded-md">
                              <img src={Dinner} alt="icon" className="w-auto h-8 md:h-6 xl:h-8 object-cover" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-50">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                              <p className="text-xs text-gray-600 tracking-wide">Bebidas y Snacks</p>
                              <h3 className="mt-1 text-lg text-indigo-500 font-bold">$ 80 creditos</h3>
                              <span className="mt-4 text-xs text-gray-500"></span>
                            </div>
                            <div className="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md">
                              <img src={Drinks} alt="icon" className="w-auto h-8 md:h-6 xl:h-8 object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Second Row */}
                      {/* Start Third Row */}
                      <div className="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
                        <div className="col-start-1 col-end-5">
                          <h2 className="text-xs md:text-sm text-gray-800 font-bold tracking-wide">Tus pedidos Favoritos</h2>
                        </div>
                        <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex justify-between items-center">
                            <div className="p-4 cursor-pointer border">
                              <span className="text-xs text-gray-500 font-semibold">Comida 13</span>
                              <h2 className="text-gray-800 font-bold tracking-wider">$ 400.00</h2>
                            </div>
                            <div className="p-4 cursor-pointer border">
                              <span className="text-xs text-gray-500 font-semibold">Comida 7</span>
                              <h2 className="text-gray-800 font-bold tracking-wider">$ 200.00</h2>
                            </div>
                            <div className="p-4 cursor-pointer border">
                              <span className="text-xs text-gray-500 font-semibold">Cena 9</span>
                              <h2 className="text-gray-800 font-bold tracking-wider">$ 150.00</h2>
                            </div>
                          </div>
                          <canvas id="myChart" />
                        </div>
                        <div className="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                          <div className="flex justify-between items-center">
                            <h2 className="text-sm text-gray-600 font-bold tracking-wide">Ultimos pedidos</h2>
                            <a href="#" className="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">Más</a>
                          </div>
                          <ul className="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                              <p className="px-4 font-semibold">Hoy</p>
                              <p className="px-4 text-gray-600">Cena</p>
                              <p className="px-4 tracking-wider">Creditos</p>
                              <p className="px-4 text-blue-600">Casa</p>
                              <p className="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </p>
                            </li>
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                              <p className="px-4 font-semibold">Ultima semana</p>
                              <p className="px-4 text-gray-600">Comida y Cena</p>
                              <p className="px-4 tracking-wider">Creditos</p>
                              <p className="px-4 text-blue-600">Oficina</p>
                              <p className="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </p>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                     
                    </div>
                  </main>
                  

                  { usuario ? (<>hay usuario {usuario.perfil_completo ? null : !showModal2 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
         
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModal2(true)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
              
                <div className="relative p-6 flex-auto">
                  
             

                    <PasarelaRegistroUno/>
        
       
      
   
                </div>
              
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal2(true)}
                  >
                    Cerrar
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null }  </>) : null}

                </div>
               
        
        </>
     );
}
 
export default Dashboard;