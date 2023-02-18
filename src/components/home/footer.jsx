import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import Login from '../../forms/login';

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
        <div>
        
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}

export default Footer;
