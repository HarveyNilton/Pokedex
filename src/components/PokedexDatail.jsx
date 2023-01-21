import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import music from '../audio/detal.mp3'

const PokedexDatail = () => {

    const {id} = useParams()
    
    const [pokemon, setpkemon] = useState({})

    useState(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setpkemon(res.data))
    },[])

    console.log(pokemon);
    return (
        <div className='container-pokedexDatail'>
            <section>
                <h1>LOGO</h1>
            </section>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
       {/*<audio className='audio' autoPlay src={music}></audio> */}
            <h2>{id}</h2>
        </div>
    );
};

export default PokedexDatail;