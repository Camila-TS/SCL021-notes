import {useState} from 'react'

const Nota = ({item, deleteNote, updateNote, updatingNotes}) => {
    const [editable, setEditable] = useState(false)
    const [contenido, setContenido] = useState('')
 

    const notEditable = () => {
        setEditable(false)
    }

  const handleUpdating = async (id, content) => {
    await updateNote(id, content)
    await updatingNotes()
  }

    return (<>
        <div id={item.id} className='myNotes'>
            <div className='notesTitle' >
                <span className='titleSpan'>{item.title}</span>
            </div>
            <div className='notesDate' >
                <span>{item.date} hrs</span>
            </div>
            <div className='notesContent' >
                {editable ? (
                    <>
                        <textarea value={contenido} onChange={(e) => setContenido(e.target.value)} cols="30" rows="10"></textarea>
                        <button onClick={() => { handleUpdating(item.id, contenido); notEditable(); }} className='updateEditButton'>Guardar</button>
                    </>
                ) : (
                    <span className='contentSpan'>{item.content}</span>
                )}
            </div>
            <button value={item.id} onClick={(e) => setEditable(!editable)} className='editButton'>Editar</button>
            <button onClick={() => deleteNote(item.id)} className='deleteButton' >Eliminar</button>
        </div>
    </>)
}

export default Nota;