import React from 'react'
import {
    Link
  } from "react-router-dom";

import Formulario from '../components/Formulario';
import Logo from '../components/Logo';

function Home() {
    return <div>
      <Link to="/login">Log In</Link>
      <img src='https://i.ibb.co/znmDXMX/interface-decline-reject-close-delete-failed-square-icon-132985.png' alt='Cerrar sesión'></img>
      <h2>Home</h2>
    <Logo />
    <Formulario />
    </div>
  }

  export default Home;