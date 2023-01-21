import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import music from '../audio/pokemo-music.mp3'

const Pokedex = () => {

    const userName = useSelector(state => state.userName)

    const [pokemon, setPokemon] = useState([])


    useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setPokemon(res.data.results))

    },[])

    return (
        <div className='container-pokedex'>
            <h1>Pokédex</h1>
            <audio className='audio' autoPlay src={music}></audio>
            <h5>Welcome: <span>{userName}</span><p>here you can find your favorite Pokemon</p> </h5>
            <div>
                <form className='input-pokedex'>
                     <form >
                        <input type="text" placeholder='Search..'/>
                     </form>
                     
                     <form>
                        <select id="country" name="country"></select>
                     </form>
                </form>
                
               
            </div>
            <ul className='ul-card'>
                {
                    pokemon.map(pokemon =>(
                        <PokemonCard url = {pokemon.url} key={pokemon.url}/>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default Pokedex;