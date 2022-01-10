import React from 'react';


function Login() {
  
  return (
   <>
        <form>
            <input type="email" placeholder="Ingresa tu correo electronico"></input>  
            <input type="text" placeholder="Ingresa tu nombre completo"></input>
            <input type="number"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" min="0" placeholder="Ingresa tu telefono completo"></input>
            <input type="submit" value="Enviar"></input>
        </form> 
   </>
  );
}

export default Login;


