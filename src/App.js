import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './views/home.jsx';
import LogIn from './views/logIn.jsx';
import Register from './views/register.jsx';

// import Formulario from './components/Formulario.jsx';
// import Logo from './components/Logo.jsx';
// import Saludo from './components/Saludo.jsx';

// import Parrafo from './components/Parrafo.jsx'
// import Variables from './components/Variables.jsx';
// import Eventos from './components/Eventos.jsx';
// import Contador from './components/Contador.jsx';
// import Notas from './components/Notas.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element={<LogIn />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


// function App() {

//   // const logo = 'https://i.ibb.co/KxNFJPs/logo.png'

//   return (
//     <div className="App">
//       <Logo />
//       <h1>AnótalApp</h1>
//       {/* <img src={ logo } alt='Logo'></img> */}
//       {/* <Saludo persona='Pedro' edad={30} />
//       <Saludo persona='Catalina' edad={27} />
//       <Saludo persona='Baltazar' edad={23} /> */}
//       {/* <Parrafo />
//       <Variables />
//       <Eventos />
//       <Contador /> 
//       <Notas /> */}
//       <Formulario />
//       {/* <Home /> */}
//     </div>
//   );
// }

// export default App;
