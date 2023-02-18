import React from 'react';
import firebase from './server/firebase';
import 'firebase/auth';
import './App.css';
import Login from './forms/login';
import Home from './components/home/home';
import app from './server/firebase';
import  { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Route, Routes } from 'react-router-dom';


const auth = getAuth(app);

function App() {
  const [usuario, setUsuario] = React.useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) =>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase);
    }else{
      setUsuario(null);
    }
  })

  return (
    <div>
  
   {
    usuario ? (
     <><Home correoUsuario={usuario.email} /></> ) 
     : 
     (
      <Login></Login>
      )
   }

    </div>
    
  );
}


export default App;
