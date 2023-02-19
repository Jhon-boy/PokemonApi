import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import Login from '../forms/login';
import '../../styles/home.css'
import { Link } from 'react-router-dom';
const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        <Login></Login>
        localStorage.removeItem('credentials')
    }).catch((error) => {
        alert('No se ha podido salir')
    });
}

const Footer = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <Link to={"/"}>
                    <li> Home</li>
                </Link>
                <Link to={"/register"}>
                    <li>Register</li>
                </Link>
                <button onClick={logOut}>Log Out</button>
            </ul>

        </nav>
    );
}

export default Footer;
