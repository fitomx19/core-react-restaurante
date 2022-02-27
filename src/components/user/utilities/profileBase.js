import React,{useState,useEffect,useContext} from 'react'
import usuarioContext from '../../../context/Usuario/usuarioContext';
const ProfileBase = (user) => {

  const UsuarioContext = useContext(usuarioContext);
  const { actualizarDireccion,usuario } = UsuarioContext;

  // State para iniciar sesión
  const [salud, setSalud] = useState({
    altura: "",
    peso: "",
    objetivo: "",
  });

  const [mensajeActivo, setmensajeActivo] = useState(false);
  
  const [entrega, setEntrega] = useState({
    pais: "",
    calle: "",
    ciudad: "",
    estado: "",
    cp: "",
    _id: user.user._id
  });

  // extraer de usuario
  const { altura, peso,objetivo } = salud;

  const { pais, calle,ciudad,estado,cp } = entrega;

  const onChange = (e) => {
    setEntrega({
      ...entrega,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarEnvio = () =>{
      // Validar que no haya campos vacios
      
      if (pais.trim() === "" || calle.trim() === "" || ciudad.trim() === "" || estado.trim() === "" || cp.trim() === "")   {
        //error
        console.log("mostrar error , no estan completos los campos")
      }else{
        actualizarDireccion(entrega)
        document.getElementById("enviosForm").reset();
        setmensajeActivo(true);
      }
  }

  const onSubmitSalud = (e) => {
    setSalud({
      ...salud,
      [e.target.name]: e.target.value,
    });
  };

    return (
        <>
        <>
        {
                    mensajeActivo ? 
                    <div className="py-3">
                    <div class="bg-green-900 text-center py-4 lg:px-4">
                          <div class="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                            <span class="font-semibold mr-2 text-left flex-auto">Datos Actualizados</span>
                            
                            <button  onClick={() =>  setmensajeActivo(false) }> <strong class="text-xl align-center cursor-pointer alert-del"
      >&times;</strong></button>
                          </div>
                    </div>
                    </div>
                    : 
                    null
                  }</>
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 inline">Tu cuenta {user ? <p>{user.user.nombre}</p>: null}!</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Actualiza tu informacion!
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                            Datos de Salud
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Estatura
                          </label>
                            <input
                              type="text"
                              name="calle"
                              id="calle"
                              value={user.user.altura}
                              className="focus:ring-indigo-500 px-4 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="Estatura"
                            />
                          </div>
                          <div className="mt-1 flex rounded-md shadow-sm">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Peso
                          </label>
                         <input
                           type="text"
                           name="company-website"
                           value={user?user.user.peso:null}
                           id="company-website"
                           className="focus:ring-indigo-500 px-4 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                           placeholder="Peso"
                         />
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Objetivo
                          </label>
                           <input
                           type="text"
                           name="company-website"
                           placeholder={user?user.user.meta:null}
                           id="company-website"
                           className="focus:ring-indigo-500 px-4 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          
                         />
                          
                       </div>
                       <div className="mt-1 flex rounded-md shadow-sm">
                         
                         <input
                           type="text"
                           name="company-website"
                           id="company-website"
                           className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                           placeholder="Dieta"
                         />
                         
                         
                          
                       </div>
                        </div>
                      </div>
    
                   
    
                  
    
                    
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
    
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900"> Informacion Personal</h3>
                  <p className="mt-1 text-sm text-gray-600">Actualiza tu informacion de entrega</p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" id='enviosForm' method="POST" onChange={()=>onChange}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                           Nombre Completo
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value= {user?user.user.nombre:null}
                            autoComplete="given-name"
                            disabled
                           
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                      
    
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Correo Electronico
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            value= {user?user.user.email:null}
                            disabled
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Pais
                          </label>
                          <select
                            id="pais"
                            name="pais"
                            onChange={onChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>-Seleccionar-</option>
                            <option>Mexico</option>

                          </select>
                        </div>
    
                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Calle
                          </label>
                          <input
                            type="text"
                            name="calle"
                            placeholder= {user?user.user.calle:null}
                            onChange={onChange}
                            id="calle"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">
                            Ciudad
                          </label>
                          <input
                            type="text"
                            name="ciudad"
                            placeholder= {user?user.user.ciudad:null}
                            id="ciudad"
                            onChange={onChange}
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                            Estado
                          </label>
                          <input
                            type="text"
                            name="estado"
                            id="estado"
                            onChange={onChange}
                            placeholder= {user?user.user.estado:null}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="cp" className="block text-sm font-medium text-gray-700">
                           Codigo Postal
                          </label>
                          <input
                            type="number"
                            name="cp"
                            id="cp"
                            onChange={onChange}
                            placeholder= {user?user.user.cp:null}
                      
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="button"
                        onClick={() => actualizarEnvio()}
                        
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
    
        
        </>
      )
}
 
export default ProfileBase;