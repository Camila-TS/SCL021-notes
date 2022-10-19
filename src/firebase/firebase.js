import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


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

async function createNote() {

  const titleInput = document.getElementById('titleInput');
  const titleText = titleInput.value
  const noteTextArea = document.getElementById('note');
  const noteText = noteTextArea.value

  try {
    const docRef = await addDoc(collection(db, "notes"), {
      title: titleText,
      content: noteText,
      date: Date.now()
    });
    console.log("Document written with ID: ", docRef.id, createClickNote());
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Función para crear los eventos de click para crear nota
function createClickNote() {
  const buttonNote = document.getElementById('addButton');
  buttonNote.addEventListener('click', createNote);
}

// recuperar toda la colección creo q no la necesitaré...
// const querySnapshot = await getDocs(collection(db, "notes"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
