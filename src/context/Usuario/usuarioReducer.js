import {
    ACTUALIZAR_INFORMACION_USUARIO_2,ACTULIZAR_ENVIO
  } from "../../types";
  
  export default (state, action) => {
    switch (action.type) {
   
      case ACTUALIZAR_INFORMACION_USUARIO_2:
        return {
          ...state,
          usuario:  action.payload 
          ,
        }

        case ACTULIZAR_ENVIO:
        return {
          ...state,
            envio:  action.payload 
          ,
        }
     
    }
  };