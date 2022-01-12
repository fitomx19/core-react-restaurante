import  React, { useContext, useEffect } from 'react'
import PanelInicio from './Panel_Inicio';
import AuthContext from "../context/autenticacion/authContext";



const Layout = (props) => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;  
    return ( 
    <>   
  
        {props.children}
        <button
    className="btn btn-blank cerrar-sesion"
    onClick={() => cerrarSesion()}
  >
    Cerrar Sesión
  </button>
    </> );
}
 
export default Layout;