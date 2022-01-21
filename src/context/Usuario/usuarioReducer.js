import {
    ACTUALIZAR_INFORMACION_USUARIO_2
  } from "../../types";
  
  export default (state, action) => {
    switch (action.type) {
   
      case ACTUALIZAR_INFORMACION_USUARIO_2:
        return {
          ...state,
          usuario:  action.payload 
          ,
        }
     
    }
  };