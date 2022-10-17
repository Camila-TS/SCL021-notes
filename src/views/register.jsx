import React from 'react'
import {
  Link
} from "react-router-dom";

import Logo from '../components/Logo';
import '../styles/register.css';

function Register() {
  return <div className='register'>
    <Logo />
    <form>
      <h2>Crea tu Cuenta</h2>
      <input type="text" placeholder='Correo electrónico' /><br />
      <input type="text" placeholder='Contraseña' /><br />
      <button><Link className="link" to="/">Continuar</Link></button>
    </form>
  </div>
}

export default Register;