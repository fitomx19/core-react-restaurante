import {
    PEDIDOS_SEMANALES
  } from "../../types";
  
  export default (state, action) => {
    switch (action.type) {

     
      case  PEDIDOS_SEMANALES:
        return {
          ...state,
          carrito: action.payload,
       
        };
  
      default:
        return state;
    }
  };