import axios from 'axios'

//Default config for axios

export default axios.create(
    {
        baseURL: `https://pokeapi.co/api/v2/`,
        responseType: 'json',
        timeout: 5000
    }

)
export const getPokemonById = (id) =>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

}

//TODO: Obtain All Users

export const getAllPokemon = async () =>{
    const res  = await  axios.get('https://pokeapi.co/api/v2/pokemon');
    return  res;

}