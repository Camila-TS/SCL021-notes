import React from 'react'

const Variables = () => {

  const saludo = 'Hola desde constante'
  const logo = 'https://i.ibb.co/KxNFJPs/logo.png'

  return (
    <div>
        <h2>Nuevo componente { saludo }</h2>
        <img src={ logo } alt='Logo'>
        </img>
    </div>
  )
}

export default Variables