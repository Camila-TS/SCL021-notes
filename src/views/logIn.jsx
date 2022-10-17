import React from 'react'
import {
  Link
} from "react-router-dom";

import Logo from '../components/Logo';
import '../styles/logIn.css';

function LogIn() {

  return <div className='login'>
    <Logo />
    <form>
      <h2>Inicia Sesión</h2>
      <input type="text" placeholder='Correo electrónico' /><br />
      <input type="text" placeholder='Contraseña' /><br />
      <button><Link className="link" id="continuar" to="/">Continuar</Link></button><br />
      <label>O</label><br />
      <button><Link className="link" to="/"><img src="https://i.ibb.co/VJtRcj1/icons8-logo-de-google-48.png" alt="Logo Google" id="iconoGoogle"/>Continuar con Google</Link></button><br />
      <button><Link className="link" to="/register">Registrarse para <br /> crear cuenta</Link><br /></button>
    </form>
  </div>
}

export default LogIn;