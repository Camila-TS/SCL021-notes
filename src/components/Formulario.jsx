import React from 'react'

import '../styles/home.css';
import { createNote, allNotes, deleteNote, updateNote } from '../firebase/firebase.js'

const Formulario = () => {

    const [titulo, setTitulo] = React.useState('')
    const [contenido, setContenido] = React.useState('')
    const [lista, setLista] = React.useState([])
    

    const action = Date.now();
    const objectAction = new Date(action);
    objectAction.toLocaleString()

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

        let newNote = await createNote(titulo, contenido)
        let notesObtained = await allNotes()

        setLista([...notesObtained])
        console.log(newNote)//es el id
        console.log(notesObtained)//array de objetos, lista de notas

        e.target.reset()
        setTitulo('')
        setContenido('')

    }

    const handleUpdateNote = async (e) => {
        const textareaNote = e.target.previousSibling;
        const noteId = textareaNote.getAttribute('item.id');
        const msg = textareaNote.value;
        await updateNote(noteId, msg);
    }

    React.useEffect ( () => {
       const obtainNotes = async () => {
            let notesObtained = await allNotes()
        setLista([...notesObtained]) 
        }
        obtainNotes()
    }, [])

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
            <button id="addButton" type='submit'>Agregar</button>
        </form>
        <h2>Mis Notas</h2>
        <div className='wrapper' >
            {
                lista.map((item, index) => (
                    <div id={ item.id } className='myNotes' key={index}>
                        <div className='notesTitle' >
                            <span className='titleSpan'>{item.title}</span>
                        </div>
                        <div className='notesDate' >
                        <span>{item.date} hrs</span>
                        </div>
                        <div className='notesContent' >
                        <span className='contentSpan'>{item.content}</span>
                        </div>
                        <button onClick={ () => handleUpdateNote(item.id) } className='editButton'>Editar</button>
                        {/* <button onClick={ () => updateNote(item.id) } className='updateEditButton'>Guardar <br /> edición</button> */}
                        <button onClick={ () => deleteNote(item.id) } className='deleteButton' >Eliminar</button>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Formulario