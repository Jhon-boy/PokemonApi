import React from 'react';
import firebase from './server/firebase';
import 'firebase/auth';
import './App.css';
import Login from './forms/login';
import Home from './components/home/home';

function App() {
  const [usuario, setUsuario] = React.useState(null);

  return (
   
    usuario ?  <Home /> : <Login setUsuario = {setUsuario}></Login>
  );
}


export default App;
