import React, { useReducer } from "react";
import menuContext from "./menuContext";
import menuReducer from "./menuReducer";



import {
    IMPRIMIR_MENU,IMPRIMIR_PLANES
} from "../../types";

import clienteAxios from "../../config/axios";

const MenuState = (props) => {
  const initialState = {
    menu: [],
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(menuReducer, initialState);

  // Crear las funciones
 
  //
  const mostrarMenu = async () => {
    
    try {
      const resultado = await clienteAxios.get(
        `/api/menu/`, 
        
      );

     // console.log(resultado.data)
      dispatch({
        type: IMPRIMIR_MENU,
        payload: resultado.data,
      });

      
    } catch (error) {
      console.log(error);
    }
  };


  const mostrarPlanes = async () => {
    
    try {
      const resultado = await clienteAxios.get(
        `/api/menu/planes`, 
        
      );

     // console.log(resultado.data)
      dispatch({
        type: IMPRIMIR_PLANES,
        payload: resultado.data,
      });

      
    } catch (error) {
      console.log(error);
    }
  };



  return (
   
    <menuContext.Provider
      value={{
        menu: state.menu,
        planes: state.planes,
        mostrarMenu,
        mostrarPlanes
        
      }}
    >
      {props.children}
    </menuContext.Provider>
   
  );
};

export default MenuState;