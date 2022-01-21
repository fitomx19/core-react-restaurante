import {
    IMPRIMIR_MENU
  } from "../../types";
  
  export default (state, action) => {
    switch (action.type) {

     
      case  IMPRIMIR_MENU:
        return {
          ...state,
          menu: action.payload,
       
        };
  
      default:
        return state;
    }
  };