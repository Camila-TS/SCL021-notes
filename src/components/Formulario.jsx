import React from 'react'
import '../styles/home.css';

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
    <div className='form'>
        <h2>Crear Nueva Nota</h2>
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
            <button id="addButton" type='submit'>Agregar</button>
        </form>
        <h2>Mis Notas</h2>
        <div className='wrapper' >
            {
                lista.map((item, index) => (
                    <div className='myNotes' key={index}>
                        <div className='notesTitle' >
                            {item.nombreTitulo}
                        </div>
                        <div className='notesDate' >
                        <span>17/10/2022 18:14 hrs</span>
                        </div>
                        <div className='notesContent' >
                        {item.nombreContenido}
                        </div>
                        <button className='editButton'>Editar</button>
                        <button className='deleteButton' >Eliminar</button>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Formulario