import React from 'react';
import Formulario from './components/Formulario.jsx';

// import Parrafo from './components/Parrafo.jsx'
// import Variables from './components/Variables.jsx';
// import Eventos from './components/Eventos.jsx';
// import Contador from './components/Contador.jsx';
// import Notas from './components/Notas.jsx';

function App() {

  const logo = 'https://i.ibb.co/KxNFJPs/logo.png'

  return (
    <div className="App">
      <h1>AnótalApp</h1>
      <img src={ logo } alt='Logo'></img>
      {/* <Parrafo />
      <Variables />
      <Eventos />
      <Contador /> 
      <Notas /> */}
      <Formulario />
    </div>
  );
}

export default App;
