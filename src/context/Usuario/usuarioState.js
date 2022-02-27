import React, { useReducer } from "react";
import UsuarioContext from "./usuarioContext";
import UsuarioReducer from "./usuarioReducer";



import {
    ACTUALIZAR_INFORMACION_USUARIO_2,ACTULIZAR_ENVIO
} from "../../types";

import clienteAxios from "../../config/axios";

const UsuarioState = (props) => {
  const initialState = {
    usuario: [],
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(UsuarioReducer, initialState);



  // Crear las funciones


 
  // Edita o modifica una tarea
  const actualizarUsuario = async (usuario) => {
      //console.log(usuario)
    try {
      const resultado = await clienteAxios.put(
        `/api/usuarios/perfil-completo`, 
        usuario
      );

      console.log(resultado.data.usuario)
      dispatch({
        type: ACTUALIZAR_INFORMACION_USUARIO_2,
        payload: resultado.data,
      });

      
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarDireccion = async (direccion) => {
    //console.log(direccion);
    try {
      const resultado = await clienteAxios.put(
        `/api/usuarios/direccion-completa`, 
        direccion
      );

      //console.log(resultado.data)
      dispatch({
        type: ACTULIZAR_ENVIO,
        payload: resultado.data,
      });

      
    } catch (error) {
      console.log(error);
    }
  }

  return (
   
    <UsuarioContext.Provider
      value={{
        usuario: state.usuario,
        direccion: state.direccion,
        actualizarUsuario,
        actualizarDireccion
        
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
   
  );
};

export default UsuarioState;