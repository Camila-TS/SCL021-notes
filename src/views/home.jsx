import React from 'react'

import Formulario from '../components/Formulario';
import Logo from '../components/Logo';
import { logout } from '../firebase/firebase';
import '../styles/home.css';

function Home() {

    return <div className='home'>
    <div onClick={() => logout()} id="square">X</div>
    <Logo />
    <Formulario />
    </div>
  }

  export default Home;