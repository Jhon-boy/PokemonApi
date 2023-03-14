import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemon, name, imagen, id}) => {
    return (
    <>
        <div className='card-img'>
            <img
                src={imagen}
                alt={`Pokemon ${name}`}
            />
        </div>
        <div className='card-info'>
            <span className='pokemon-id'>N° {id}</span>
            <h3>{name}</h3>
            <div className='card-types'>
                {pokemon.types.map(type => (
                    <span key={type.type.name} className={type.type.name}>
                        {type.type.name}
                    </span>
                ))}
            </div>
        </div>
</>
    );
}

export default PokemonCard;
