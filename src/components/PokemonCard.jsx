import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon , setPokemon] = useState({})

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(url).then(res=> setPokemon(res.data))
    },[])


    return (
        <div className='pokedex-card' onClick={()=> navigate(`/pokemon/${pokemon.id}`)}>
              <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <div className='container-description'>
                 <h3>{pokemon.name}</h3>
                 <h4>{pokemon.types?.[0]?.type.name} / {pokemon.types?.[1]?.type.name}</h4>
                 <h6>Types</h6>
                 <div className='container-stats'>
                    <div className='item-stats'>
                        <p className='name-stats'>{pokemon.stats?.[0].stat.name}</p>
                        <h3 className='valor-stats'>{pokemon.stats?.[0].base_stat}</h3>
                    </div >
                    <div className='item-stats'>
                        <p className='name-stats'>{pokemon.stats?.[1].stat.name}</p>
                        <h3 className='valor-stats'>{pokemon.stats?.[1].base_stat}</h3>
                    </div>
                    <div className='item-stats'>
                        <p className='name-stats'>{pokemon.stats?.[2].stat.name}</p>
                        <h3 className='valor-stats'>{pokemon.stats?.[2].base_stat}</h3>
                    </div>
                    <div className='item-stats'>
                        <p className='name-stats'>{pokemon.stats?.[3].stat.name}</p>
                        <h3 className='valor-stats'>{pokemon.stats?.[3].base_stat}</h3>
                    </div>
                    <div className='item-stats'>
                        <p className='name-stats'>{pokemon.stats?.[4].stat.name}</p>
                        <h3 className='valor-stats'>{pokemon.stats?.[4].base_stat}</h3>
                    </div>
                    <div className='item-stats'>
                        <p className='name-stats'>{pokemon.stats?.[5].stat.name}</p>
                        <h3 className='valor-stats'>{pokemon.stats?.[5].base_stat}</h3>
                    </div>
                 </div>
            </div>
           
           
        </div>
    );
};

export default PokemonCard;