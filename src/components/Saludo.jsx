import React from 'react'

const Saludo = (props) => {

  console.log(props)

  return (
    <div>
        <h2>Bienvenid@ {props.persona} a AnótApp!</h2>
        <p>Edad: {props.edad}</p>
    </div>
  )
}

export default Saludo