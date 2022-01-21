import React, { useReducer } from "react";
import UsuarioContext from "./usuarioContext";
import UsuarioReducer from "./usuarioReducer";



import {
    ACTUALIZAR_INFORMACION_USUARIO_2
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



  return (
   
    <UsuarioContext.Provider
      value={{
        usuario: state.usuario,
        actualizarUsuario,
        
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
   
  );
};

export default UsuarioState;