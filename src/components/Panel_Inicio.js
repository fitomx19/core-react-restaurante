import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../context/alertas/alertaContext";
import AuthContext from "../context/autenticacion/authContext";
import { Route, Navigate } from "react-router-dom";
import Login from "../components/Login";
import BOWL from "../images/BOWL_1.png"

const PanelInicio = (props) => {
  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;
  // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (autenticado) {
      <Navigate to="/dashboard"/>
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  
  //State para iniciar Sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
    nombre: "",
    confirmar: "",
    fecha: ""
  });
  //Extraer de usuario
  const { email, password, nombre, confirmar ,fecha } = usuario;

  const showDiv = () =>{
      setHidden(true)
  }

  const onChang1e = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    //valirdar campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      fecha.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    //password de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe tener más de 6 caarcteres",
        "alerta-error"
      );
      return;
    }
    //Los dos passwords iguales
    if (password !== confirmar) {
      mostrarAlerta("Las contraseñas no coinciden", "alerta-error");
      return;
    }
    //pasar al action
    registrarUsuario({ nombre, email, password ,fecha });
  };

    return ( 

<div>
<section className="w-full px-3 antialiased bg-gradient-to-r from-green-500  to-green-200 lg:px-6">
   
    <div className="mx-auto max-w-7xl bg-bowl bg-no-repeat bg-cover  bg-fixed">
  

        <div className="container py-32 mx-auto text-center sm:px-4">

            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block"> Comida bien saludable si o si</span> </h1>
            <div className="max-w-lg mx-auto mt-6 font-bold text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Obten los mejores precios en comida asi como las opciones más saludables semanalmente!</div>
           
            <section>
<div className="bg-grey-lighter  flex flex-col">
   
            <div className="container  top-1.5 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <br/>
              

               {!hidden ?  <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-3xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  onClick={() => showDiv()}>Registrate!</button> : null}
                {hidden ? 
                
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Registrate!</h1>
                {alerta ? (
                                <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
                            ) : null}
              
                <form method="post" className="" onSubmit={onSubmit}>
                  
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={onChang1e}
                    required
                    placeholder="Nombre Completo" />

                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    id="email"
                    name="email"
                   
                    value={email}
                    onChange={onChang1e}
                    required
                    placeholder="Correo" />
                <label>¿Cuál es tu fecha de nacimiento?</label>
                <input 
                    type="date"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fecha"
                    value={fecha}
                    onChange={onChang1e}
                    required
                     />

                <input 
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Tu password"
                    onChange={onChang1e}
                    required
                    />
                <input 
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChang1e}
                    required
                    placeholder="Confirmar Contraseña" />

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
                >Crear Cuenta</button>
                </form>
                <div className="text-center text-sm text-grey-dark mt-4">
                   Al registrarte aceptas nuestros
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                      Terminos de servicio
                    </a> y   
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                          Politica de Privacidad
                    </a>
                </div>
            </div>
                
                
                
                : null}
                
                      
               
            </div>
        </div>
</section>
        </div>
    </div>
    
</section>

              <div className="flex items-center justify-center h-40 ">
                    
                    <Login/>
                   
              </div>
</div>



        );
}
 
export default PanelInicio;