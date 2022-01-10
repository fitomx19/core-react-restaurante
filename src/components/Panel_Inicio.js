import React from 'react'
import Navbar from './NavBar';

const PanelInicio = () => {
    let error

    return ( 

<div>
<section class="w-full px-3 antialiased bg-gradient-to-r from-green-500  to-green-200 lg:px-6">
   
    <div class="mx-auto max-w-7xl">
  



        <div class="container py-32 mx-auto text-center sm:px-4">

            <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block"> Comida bien saludable si o si</span> </h1>
            <div class="max-w-lg mx-auto mt-6 font-bold text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Obten los mejores precios en comida asi como las opciones más saludables semanalmente!</div>
           
            <section>
<div class="bg-grey-lighter  flex flex-col">
   
            <div class="container  top-1.5 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <br/>
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Registrate!</h1>
                    <h3>{error}</h3>
                    <form method="post" className="" action="http://localhost:8000/registro">
                      
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        required
                        placeholder="Nombre Completo" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        required
                        placeholder="Correo" />
                    <label>¿Cuál es tu fecha de nacimiento?</label>
                    <input 
                        type="date"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="age"
                        required
                         />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        required
                        placeholder="Contraseña" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        required
                        placeholder="Confirmar Contraseña" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-gray-400 hover:bg-green-dark focus:outline-none my-1"
                    >Crear Cuenta</button>
                    </form>
                    <div class="text-center text-sm text-grey-dark mt-4">
                       Al registrarte aceptas nuestros
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                          Terminos de servicio
                        </a> y   
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                              Politica de Privacidad
                        </a>
                    </div>
                </div>

                <div class="text-white mt-6">
                    Ya tienes una cuenta?
                    <br></br>
                    <a class="no-underline border-b border-white text-white" href="../login/">
                        Inicia Sesion
                    </a>.
                </div>
            </div>
        </div>
</section>
           
         
        </div>
    </div>
    
</section>

</div>


        );
}
 
export default PanelInicio;