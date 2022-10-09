import React, {useState} from 'react'

const Notas = () => {

    const estadoInicial = [
        {id: 1, texto: 'nota 1'},
        {id: 2, texto: 'nota 2'},
        {id: 3, texto: 'nota 3'}
    ]

    const [nota, setNota] = useState(estadoInicial)

    const agregarElemento = () => {
        console.log('click')
        setNota([
            ...nota,
            {id: 4, texto: 'nota 4'}
        ])
    }

  return (
    <div>
        <h2>Tus Notas</h2>
        {
            nota.map( (item, index) => (
                <h4 key={item.id} >{item.texto}</h4>
            ))
        }
        <button onClick={() => agregarElemento()}>Agregar</button>
    </div>
  )
}

export default Notas