import React from 'react'

import '../styles/home.css';
import { createNote, allNotes } from '../firebase/firebase.js'

const Formulario = () => {

    const [titulo, setTitulo] = React.useState('')
    const [contenido, setContenido] = React.useState('')
    const [lista, setLista] = React.useState([])

    const action = Date.now();
    const objectAction = new Date(action);
    // console.log(objectAction.toLocaleString() + " hrs")

    const guardarDatos =  async (e) => {
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

        let newNote = await createNote()
        let notesObtained = await allNotes()
        setLista([...notesObtained])
        
        // setLista([
        //     ...lista, 
        //     {nombreTitulo: titulo, nombreContenido: contenido}
        // ])

        e.target.reset()
        setTitulo('')
        setContenido('')

    }

    // useEffect(() => {
    //     setLista(allNotes)
    //   }, []);

  return (
    <div className='form'>
        <h2>Crear Nueva Nota</h2>
        <form onSubmit={ guardarDatos } >
            <input 
               type="text" 
               id='titleInput'
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
            <button id="addButton" type='submit' >Agregar</button>
        </form>
        <h2>Mis Notas</h2>
        <div className='wrapper' >
            {
                lista.map((item, index) => (
                    <div className='myNotes' key={index}>
                        <div className='notesTitle' >
                            <span className='titleSpan'>{item.nombreTitulo}</span>
                        </div>
                        <div className='notesDate' >
                        <span>{objectAction.toLocaleString()} hrs</span>
                        </div>
                        <div className='notesContent' >
                        <span className='contentSpan'>{item.nombreContenido}</span>
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