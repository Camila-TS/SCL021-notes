import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCvZDLjhVmewF3q-WJkLQ3c7atMDRdfWOE",
    authDomain: "anotalapp.firebaseapp.com",
    projectId: "anotalapp",
    storageBucket: "anotalapp.appspot.com",
    messagingSenderId: "450772797409",
    appId: "1:450772797409:web:4ff3c94f6d229eb6c0f4a0"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

const db = getFirestore(app);



// Crear colección
export async function createNote(title, content) {

  // const titleInput = document.getElementById('titleInput');
  // const titleText = titleInput.value
  // const noteTextArea = document.getElementById('note');
  // const noteText = noteTextArea.value

  const action = Date.now();
    const objectAction = new Date(action);
    objectAction.toLocaleString()

  try {
    const docRef = await addDoc(collection(db, "notes"), {
      
      title: title,
      content: content,
      date: objectAction.toLocaleString()
    });
    // console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e); 
    throw e;
  }
}


// recuperar toda la colección

 export const allNotes = async () => {
  try {
    const notes = [];
    const querySnapshot = await getDocs(collection(db, 'notes'));
    querySnapshot.forEach((noteDoc) => {
      const note = noteDoc.data();
      note.id = noteDoc.id;
     notes.push(note);
     console.log(note)
    //  console.log(notes)
    });
    return notes;
  } catch (e) {
    console.log('Error get all documents', e.message);
  }
};

// const querySnapshot = await getDocs(collection(db, "notes"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

//Borrar Nota
// await deleteDoc(doc(db, "notes", "id"));

export const deleteNote = async (idNote) => {
  try {
    await deleteDoc(doc(db, 'notes', idNote));
    console.log('Se eliminó el documento');
  } catch (e) {
    console.error('Error delete document', e.message);
  }
};

//Editar Nota
// const notesRef = doc(db, "notes", "idNote");

// // Set the "content" field of the note 'idNote'
// await updateDoc(notesRef, {
//   content: true
// });

// export const updateNote = async (idNote, message) => {
//   try {
//     const docRef = doc(db, 'notes', idNote);
//     await updateDoc(docRef, {
//       content: message,
//     });
//   } catch (e) {
//     console.log('Error update document', e.message);
//   }
// };