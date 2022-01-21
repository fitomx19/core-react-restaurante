import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    ACTUALIZAR_INFORMACION_USUARIO
  } from "../../types";
  
  export default (state, action) => {
    switch (action.type) {
      case REGISTRO_EXITOSO:
      case LOGIN_EXITOSO:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          autenticado: true,
          mensaje: null,
          cargando: false,
        };
      case OBTENER_USUARIO:
        return {
          ...state,
          autenticado: true,
          usuario: action.payload,
          cargando: false,
        };
      case CERRAR_SESION:
        localStorage.removeItem("token");
        return{
          usuario: null,
          autenticado:false,
          cargando: false
        }
      case LOGIN_ERROR:
      case ACTUALIZAR_INFORMACION_USUARIO:
          return {
            ...state,
            usuario:  action.payload 
            
          }
      case REGISTRO_ERROR:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          usuario: null,
          autenticado: null,
          mensaje: action.payload,
          cargando: false,
        };
  
      default:
        return state;
    }
  };