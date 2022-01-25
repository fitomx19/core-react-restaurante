import React, { useContext, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const RutaPrivada = ({ children}) => {
  const authContext = useContext(AuthContext);
  const { autenticado, cargando, usuario,token,usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (autenticado == null  && usuario === undefined? <Navigate to="/"/> : children );
};



export default RutaPrivada;