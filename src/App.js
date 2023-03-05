import React from 'react';
import 'firebase/auth';
import './App.css';
import Home from './components/home/home';
import app from './server/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from './components/forms/login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import CreateCount from './components/forms/CreateCount';
import Error from './components/pages/404Error/Error'
const auth = getAuth(app);

function App() {
  const [usuario, setUsuario] = React.useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  })

  return (

    <Router>
      <Switch>
        {/* Login Route */}
        <Route exact path='/'>
          {
            usuario ?
              <Redirect from='/' to='/home' />
              :
              <Redirect from='/' to='/login' />
          }
        </Route>
        {/* Dashboard Route */}
        <Route exact path='/login'>
          {
            usuario ?
              <Home correoUsuario={usuario.email} />
              :
              <Login></Login>
          }
        </Route>
        {/* <Route  exact path='/home' component={Home}/> */}
        <Route exact path='/home'>
          {
            usuario ?
              <Home correoUsuario={usuario.email} />
              :
              <Login></Login>
          }
        </Route>

        <Route exact path='/register' component={CreateCount} />
        <Route component={Error} />
      </Switch>
    </Router>

  );
}
export default App;
