import React from 'react'
import Nota from './Nota.jsx'

import '../styles/home.css';
import { createNote, allNotes, deleteNote, updateNote } from '../firebase/firebase.js'


const Formulario = () => {

    const [titulo, setTitulo] = React.useState('')
    const [contenido, setContenido] = React.useState('')
    const [lista, setLista] = React.useState([])

    const action = Date.now();
    const objectAction = new Date(action);
    objectAction.toLocaleString()

    const guardarDatos = async (e) => {
        e.preventDefault()

        if (!titulo.trim()) {
            console.log('está vacío el título')
            return
        }

        if (!contenido.trim()) {
            console.log('está vacío el contenido de la nota')
            return
        }

        console.log('procesando datos...' + titulo + ' ' + contenido)

        let newNote = await createNote(titulo, contenido)
        updatingNotes()
        console.log(newNote)//es el id
        // console.log(notesObtained)//array de objetos, lista de notas

        e.target.reset()
        setTitulo('')
        setContenido('')

    }

    const updatingNotes = async () => {
        let notesObtained = await allNotes()
        setLista([...notesObtained])
    }

    React.useEffect(() => {
        const obtainNotes = async () => {
            let notesObtained = await allNotes()
            setLista([...notesObtained])
        }
        obtainNotes()
    }, [])

    return (
        <div className='form'>
            <h2>Crear Nueva Nota</h2>
            <form onSubmit={guardarDatos} >
                <input
                    type="text"
                    id='titleInput'
                    placeholder='Ingresa el título de tu nota'
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <br />
                <textarea
                    placeholder='Ingresa tu nota'
                    name="note"
                    id="note"
                    cols="30"
                    rows="10"
                    onChange={(e) => setContenido(e.target.value)}
                >
                </textarea>
                <br />
                <button id="addButton" type='submit'>Agregar</button>
            </form>
            <h2>Mis Notas</h2>
            <div className='wrapper' >
                {
                    lista.map((item, index) => (
                        <Nota updatingNotes={updatingNotes} item={item} key={index} setContenido={setContenido} updateNote={updateNote} deleteNote={deleteNote} />
                    ))
                }
            </div>
        </div>
    )
}

export default Formulario