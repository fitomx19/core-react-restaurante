import {
    IMPRIMIR_MENU,IMPRIMIR_PLANES
  } from "../../types";
  
  export default (state, action) => {
    switch (action.type) {

     
      case  IMPRIMIR_MENU:
        return {
          ...state,
          menu: action.payload,
       
        };
        case  IMPRIMIR_PLANES:
          return {
            ...state,
            planes: action.payload,
         
          };
  
      default:
        return state;
    }
  };