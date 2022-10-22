import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


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

export async function createNote() {

  const titleInput = document.getElementById('titleInput');
  const titleText = titleInput.value
  const noteTextArea = document.getElementById('note');
  const noteText = noteTextArea.value

  const action = Date.now();
    const objectAction = new Date(action);
    objectAction.toLocaleString()

  try {
    const docRef = await addDoc(collection(db, "notes"), {
      title: titleText,
      content: noteText,
      date: objectAction.toLocaleString()//Date.now()
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
