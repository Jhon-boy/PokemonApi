import React from 'react';
import Footer from './footer';
import  PokemoPage  from '../pages/PokemoPage'


const Home = ({ correo}) => {
console.log(correo)
    return (
        <div>
            <Footer></Footer>
            <PokemoPage></PokemoPage>
            
        </div>
    );
}

export default Home;
