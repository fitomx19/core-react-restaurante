import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import AlertaContext from "../context/alertas/alertaContext";
import AuthContext from "../context/autenticacion/authContext";


const Login = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // En caso de que el password o usuario no exista
  useEffect(() => {
    if (autenticado) {
      console.log(autenticado)
      console.log(props)
      props.history.push("/dashboard");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  // extraer de usuario
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Iniciar Sesion
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Inicio de Sesion
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  
                <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}

      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="block border border-green-light w-full p-3 rounded mb-4"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>


                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Login;