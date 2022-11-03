import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

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

//Inicializa firestore
const db = getFirestore(app);

// Inicializa la autenticación de usuarios
const auth = getAuth(app);

// Crear colección
export async function createNote(title, content) {

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

//Borrar Nota

export const deleteNote = async (idNote) => {
  try {
    await deleteDoc(doc(db, 'notes', idNote));
    document.getElementById(idNote).remove()
    console.log('Se eliminó el documento');
  } catch (e) {
    console.error('Error delete document', e.message);
  }
};

//Editar Nota

export const updateNote = async (idNote, message) => {
  try {
    const docRef = doc(db, 'notes', idNote);
    await updateDoc(docRef, {
      content: message,
    });
  } catch (e) {
    console.log('Error update document', e.message);
  }
};

//Autentificación con Google
const provider = new GoogleAuthProvider();

export const accessGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const { user: { accessToken, email, uid } } = result;
      localStorage.setItem('uid', uid);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('email', email);
    })
    .catch((error) => {
      console.log(error);
    });
};

export function userActive(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      callback() //es la f(x) flecha que estoy declarando en logIn useEffect
      console.log(uid);
      console.log('Sí estoy logueado')
    } else {
      console.log('No esta logueado');
    }
  });
}

// Cerrar sesión
export const logout = async () => {
  const auth = getAuth(app);
  try {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
    console.log('Sesión cerrada')
    window.location.href = '/login'

  } catch (e) {
    // console.error(e);
  }
};