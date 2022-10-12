import React from 'react'
import {
  Link
} from "react-router-dom";

import Logo from '../components/Logo';

function LogIn() {

  return <div>
    <Logo />
    <h2>Iniciar Sesión</h2>
    <form>
      <input type="text" placeholder='Correo electrónico' /><br />
      <input type="text" placeholder='Contraseña' /><br />
      <button><Link to="/">Continuar</Link></button><br />
      <label>O</label><br />
      <button><Link to="/">Continuar con Google</Link></button><br />
      <button><Link to="/register">Registrarse para crear cuenta</Link><br /></button>
    </form>
  </div>
}

export default LogIn;