import React, { useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick = () => {
    console.log('Me diste click')
    setTexto('cambiando el texto...')
}

  return (
    <div>
        <hr />
        <h2>{ texto }</h2>
        <button onClick={ () => eventoClick() }>Click</button>
    </div>
  )
}

export default Eventos