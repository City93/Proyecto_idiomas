// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let contador = 0

// document.getElementById("languages").onchange = changeListener;
  
//   function changeListener(){
//   let value = this.value
//     console.log(value);
    
//     if (value == "ingles"){
//       document.getElementById('questions').style.display  = 'inherit'
//       document.getElementById('level2').style.display = 'none'
//     }else{
//         document.getElementById('questions').style.display = 'none'
//         document.getElementById('level2').style.display = 'inherit'
//     }
    
//   }


const contarAciertos = ()=>{
    if(document.getElementById("a1").checked){
        return console.log('hello')
    }else{
        console.log('error')
    }
    console.log(contador)
}

document.getElementById("a1").onchange = contarAciertos




document.getElementById("button").addEventListener('click', async ()=>{
    const name = document.getElementById("fName").value
    const lastName = document.getElementById("lName").value
    const email = document.getElementById("email").value
    const language = document.getElementById("languages").value 
    const level = document.getElementById("level").value

   

  if(language==="ingles"){
      console.log("Hola")
      
      
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
