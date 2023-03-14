import { useState, useEffect } from "react";
import { getAllPokemon } from '../../services/ConfigAxios'
import axios from "axios";
import PokemonCard from "./PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getAllPokemon()
      .then((response) => {
        const results = response.data.results;
        const pokemonPromises = results.map((result) =>
          axios.get(result.url)
        );
        Promise.all(pokemonPromises)
          .then((pokemonResponses) => {
            const pokemonList = pokemonResponses.map((response) => {
              const name = response.data.name;
              const imageUrl = response.data.sprites.other.dream_world.front_default;
              const idP = response.data.id;
              const type = response.data.types.map((type) => type.type.name).join(', ');
              const height = response.data.height;
              const weight = response.data.weight;
              const Hp = response.data.stats[0].base_stat;
              return { name, imageUrl, idP, type, height, weight, Hp };
            });
            setPokemonList(pokemonList);
          });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" contenedor row row-cols-1 row-cols-md-4 g-3">
      {pokemonList.map((pokemon) => (
        <div className="mb-3">
        <div key={pokemon.name} 
           className='card contenedor'  
           style={{ width: '340px'}}>
            <img
              className="card-img-top card-img"
              src={pokemon.imageUrl}
              alt={`Pokemon ${pokemon.name}`}
            />
            <span className='number-pokemon'>#{pokemon.idP}</span>
            <div className="card-body">

              <div className='container-info-pokemon'>
                <h1>Nombre: {(pokemon.name)}</h1>
                <div className='card-types info-pokemon-type'>
                  <span key={pokemon.type} className={`${pokemon.type}`}>
                    {pokemon.name}
                  </span>

                </div>
                <div className='info-pokemon'>
                  <div className='group-info'>
                    <p>Altura</p>
                    <span>{pokemon.height}</span>
                  </div>
                  <div className='group-info'>
                    <p>Peso</p>
                    <span>{pokemon.weight}KG</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>       
      ))
      }
    </div >
  );
}

export default App;
// {
//   {pokemonList.map((pokemon) => (
//     <div  key={pokemon.name}>
//       <h2>{pokemon.name}</h2>
//       <img src={pokemon.imageUrl} alt={pokemon.name} />
//       <h2>ID: {pokemon.idP}</h2>
//       <h3>L:  { pokemon.lenguaje}</h3>
//     </div>
//   ))}
// }
