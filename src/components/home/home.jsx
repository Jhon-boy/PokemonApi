import React from 'react';
import Footer from './footer';




const Home = ({ correo}) => {
console.log(correo)
    return (
        <div>
            <Footer></Footer>
            BIENVENIDO { correo}
        </div>
    );
}

export default Home;
