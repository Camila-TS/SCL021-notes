import React, { useEffect } from 'react'
import {
   useNavigate
} from "react-router-dom";

import Logo from '../components/Logo';
import { accessGoogle, userActive } from '../firebase/firebase';
import '../styles/logIn.css';

function LogIn() {

  const navigate = useNavigate();

  useEffect(() => {
    userActive(() => {
      navigate("/")
    })
}, [navigate])

  return <div className='login'>
    <Logo />
    <div className='wrapper'>
      <h2>Inicia Sesión</h2>
      <h3>¡Bienvenid@ a la aplicación donde aterrizarás tus ideas!</h3><br />
    
      {/* <input type="text" placeholder='Correo electrónico' /><br />
      <input type="text" placeholder='Contraseña' /><br />
      <button><Link className="link" id="continuar" to="/">Continuar</Link></button><br />
      <label>O</label><br /> */}
      <button onClick={() => accessGoogle()}><img src="https://i.ibb.co/VJtRcj1/icons8-logo-de-google-48.png" alt="Logo Google" id="iconoGoogle"/>Continuar con Google</button><br />
      {/* <button><Link className="link" to="/register">Registrarse para <br /> crear cuenta</Link><br /></button> */}
      </div>
  </div>
}

export default LogIn;