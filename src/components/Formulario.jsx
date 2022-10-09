import React from 'react'

const Formulario = () => {

    const [titulo, setTitulo] = React.useState('')
    const [contenido, setContenido] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()

        if(!titulo.trim()){
            console.log('está vacío el título')
            return
        }

        if(!contenido.trim()){
            console.log('está vacío el contenido de la nota')
            return
        }

        console.log('procesando datos...' + titulo + ' ' + contenido)

        setLista([
            ...lista, 
            {nombreTitulo: titulo, nombreContenido: contenido}
        ])

        e.target.reset()
        setTitulo('')
        setContenido('')

    }

  return (
    <div>
        <h2>Nueva Nota</h2>
        <form onSubmit={ guardarDatos } >
            <input 
               type="text" 
               placeholder='Ingresa el título de tu nota'
               onChange={ (e) => setTitulo(e.target.value) }
            />
            <br />
            <textarea 
                placeholder='Ingresa tu nota'
                name="note" 
                id="note" 
                cols="30" 
                rows="10"
                onChange={ (e) => setContenido(e.target.value) }
                >
                </textarea>
            <br />
            <button type='submit'>Agregar</button>
        </form>
        <h2>Tus Notas</h2>
            {
                lista.map((item, index) => (
                    <div key={index}>
                        <div>
                            {item.nombreTitulo}
                        </div>
                        <div>
                        {item.nombreContenido}
                        </div>
                        <button>Editar</button>
                        <button>Eliminar</button>
                </div>
                ))
            }
    </div>
  )
}

export default Formulario