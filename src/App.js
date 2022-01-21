import React from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import UsuarioState from "./context/Usuario/usuarioState";
import MenuState from "./context/menu/menuState";


import tokenAuth from './config/token';

import Home from './pages/Home';
import Registro from './pages/PasarelaRegistroUno';
import Dashboard from './pages/user/Dashboard';
import RutaPrivada from './components/ruta/RutaPrivada';

const token = localStorage.getItem('token');
if(token){
  tokenAuth(token)
}

function App() {
  return (
   
 
        <AlertaState>
          <AuthState>
            <UsuarioState>
              <MenuState>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registro" element={<Registro/>}/>
                
              
                <Route
                  path="/dashboard"
                  element={
                    <RutaPrivada>
                      <Dashboard />
                    </RutaPrivada>
          }
        />
              </Routes>
              </MenuState>
              </UsuarioState>
          </AuthState>
        </AlertaState>
     
     
    
  );
}

export default App;
