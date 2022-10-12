import React from 'react'
import {
  Link
} from "react-router-dom";

import Logo from '../components/Logo';

function Register() {
  return <div>
    <Logo />
    <h2>Crea tu Cuenta</h2>
    <form>
      <input type="text" placeholder='Correo electrónico' /><br />
      <input type="text" placeholder='Contraseña' /><br />
      <button><Link to="/">Continuar</Link></button>
    </form>
  </div>
}

export default Register;