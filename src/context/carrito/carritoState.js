import React, { useReducer } from "react";
import CarritoContext from "./carritoContext";
import CarritoReducer from "./carritoReducer";

import {
    PEDIDOS_SEMANALES
} from "../../types";

import clienteAxios from "../../config/axios";

const CarritoState = (props) => {
  const initialState = {
    carrito: []
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(CarritoReducer, initialState);

  // Crear las funciones
 
  //
  const anadirCarrito = (e) => {

      console.log(e)
      dispatch({
        type: PEDIDOS_SEMANALES,
        payload: e,
      });

      
    
  };



  return (
   
    <CarritoContext.Provider
      value={{
        carrito: state.carrito,
        anadirCarrito,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
   
  );
};

export default CarritoState;