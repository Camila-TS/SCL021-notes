//traer formulario y logo
//crear componente home y renderizo logo y form
import React from 'react'
import Formulario from '../components/Formulario';
import Logo from '../components/Logo';

function Home() {
    return <div><h2>Home</h2>
    <Logo />
    <Formulario />
    </div>
  }

  export default Home;