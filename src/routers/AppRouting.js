

import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes as Switch, Link, Routes} from 'react-router-dom';
import Login from '../forms/login';
import Home from '../components/home/home';
import CreateCount from '../forms/CreateCount';

function AppRouting() {
    return (
        <Routes>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Registrase</Link>
            <Link to='/register'>Error</Link>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/home' component={ Home} /> 
                <Route exact path='register' component={CreateCount}/>
                <Route path='*'>Error Page not found</Route>
            </Switch>
        </Routes>
    )
}

export default AppRouting;