import React from 'react'

import '../styles/home.css';
import { createNote, allNotes } from '../firebase/firebase.js'

const Formulario = () => {

    const [titulo, setTitulo] = React.useState('')
    const [contenido, setContenido] = React.useState('')
    const [lista, setLista] = React.useState([])

    const inputRef = React.useRef(null);
    const textareaRef = React.useRef(null);

    const onClickButton = () => {
        // const { value } = inputRef.current; // input value
        // const { value } = textareaRef.current; // input value
		// console.log(inputValue) //undefined
        // console.log(textareaValue) //undefined
        console.log(inputRef.current.value) //título
        console.log(textareaRef.current.value) //contenido
	}

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

        let newNote = await createNote()
        let notesObtained = await allNotes()
        setLista([...notesObtained])
        console.log(newNote)//es el id
        console.log(notesObtained)//array de objetos, lista de notas

        // setLista([
        //     ...lista, 
        //     {nombreTitulo: titulo, nombreContenido: contenido}
        // ])

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
               id='titleInput'
               placeholder='Ingresa el título de tu nota'
               onChange={ (e) => setTitulo(e.target.value) }
               ref={inputRef}
            />
            <br />
            <textarea 
                placeholder='Ingresa tu nota'
                name="note" 
                id="note" 
                cols="30" 
                rows="10"
                onChange={ (e) => setContenido(e.target.value) }
                ref={textareaRef}
                >
                </textarea>
            <br />
            <button id="addButton" type='submit' onClick={onClickButton}>Agregar</button>
        </form>
        <h2>Mis Notas</h2>
        <div className='wrapper' >
            {
                lista.map((item, index) => (
                    <div className='myNotes' key={index}>
                        <div className='notesTitle' >
                            <span className='titleSpan'>{item.title}</span>
                            <span className='titleSpan'>{inputRef.current?.value}</span>
                        </div>
                        <div className='notesDate' >
                        <span>{item.date} hrs</span>
                        </div>
                        <div className='notesContent' >
                        <span className='contentSpan'>{item.content}</span>
                        <span className='contentSpan'>{textareaRef.current?.value}</span>
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