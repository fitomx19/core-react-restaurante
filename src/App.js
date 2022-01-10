import React from 'react'
import './App.css';

import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Registro from './pages/PasarelaRegistroUno';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <div>
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
         
     </Routes>
      </div>
    
  );
}

export default App;
