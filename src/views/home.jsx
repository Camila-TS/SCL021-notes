import React from 'react'
import {
    Link
  } from "react-router-dom";

import Formulario from '../components/Formulario';
import Logo from '../components/Logo';
import '../styles/home.css';

function Home() {
    return <div className='home'>
      <Link className="link" to="/login"><div id="square">X</div></Link>
    <Logo />
    <Formulario />
    </div>
  }

  export default Home;