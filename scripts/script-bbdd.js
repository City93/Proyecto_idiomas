
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCvvrnFdYatECzatdwKvxXmSbhb3IrtD6g",
  authDomain: "registroalumnos-a5b04.firebaseapp.com",
  projectId: "registroalumnos-a5b04",
  storageBucket: "registroalumnos-a5b04.appspot.com",
  messagingSenderId: "430239746316",
  appId: "1:430239746316:web:f4ba47be323e09951ba129",
  measurementId: "G-9PBNGBP8MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


document.getElementById("button").addEventListener('click', async ()=>{
    const name = document.getElementById("fName").value
    const lastName = document.getElementById("lName").value
    const email = document.getElementById("email").value
    const language = document.getElementById("languages").value 
    let level = document.getElementById("level").value   

  if(language==="ingles"){    

    if(document.getElementById("a1-1").checked && 
    document.getElementById("a2-3").checked && 
    document.getElementById("a3-2").checked){

        level = "Experto"       

    }else if (document.getElementById("a1-1").checked && 
    document.getElementById("a2-3").checked || 
    document.getElementById("a3-2").checked){

        level = "Intermedio"
     
    }else{
        level = "Principiante"
        
    }
    
    try {

        const docRef = await addDoc(collection(db, "users"), {
          name: `${name}`,
          lastName: `${lastName}`,
          email: `${email}`,
          language: `${language}`,
          level:`${level}`,
    
        });

        alert(`Hola ${name} ${lastName}, ha sido inscrito/a en ${language} en el nivel ${level} correctamente. ¡Disfrute de la experiencia!`)
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }  
      
  }else{

    try {

        const docRef = await addDoc(collection(db, "users"), {
          name: `${name}`,
          lastName: `${lastName}`,
          email: `${email}`,
          language: `${language}`,
          level:`${level}`,
    
        });

        alert(`Hola ${name} ${lastName}, ha sido inscrito/a en ${language} en el nivel ${level} correctamente. ¡Disfrute de la experiencia!`)
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
    
    
})
