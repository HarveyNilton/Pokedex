import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import music from '../audio/detal.mp3'
import pokelogo from '/pokemon-logo.png'

const PokedexDatail = () => {

    const { id } = useParams()

    const [pokemon, setpkemon] = useState({})

    useState(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setpkemon(res.data))
    }, [])

    console.log(pokemon);
    return (
        <div className='container-pokedexDatail'>
            <div className='sub-container-pokeDatail'>

                <div className='container-pokemon-left'>

                    <section>
                        <img className='pokelogo' src={pokelogo} alt="" />
                    </section>

                    <section className='container-section'>
                      
                        <section className='description-pokedexDatail'>
                        <img className='img-pokemon' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                            <div className='container-num'>
                                <div className='item-num'>
                                    <p>{Number(pokemon.weight)}<br /><span>Weight</span></p>
                                </div>
                                <div  className='item-num'>
                                    <p>{Number(pokemon.height)}<br /><span>Height</span></p>
                                </div >
                            </div>
                            <h3>{pokemon.name}</h3>
                            <h5>#{pokemon.id}</h5>
                        </section>
                    </section>

                    <section className='container-atribute'>
                        <section className='container-type-Abilities'>
                            <h4>Type</h4>
                            <div className='item-type'>
                                <h4 className='poke-typeone'>{pokemon.types?.[0]?.type.name}</h4>
                                <h4 className='poke-typetwo'>{pokemon.types?.[1]?.type.name}</h4>
                            </div>
                        </section>
                        <section className='container-type-Abilities'>
                            <h4>Abilities</h4>
                            <div className='item-type'>
                                <h4 className='poke-typeone'>{pokemon.abilities?.[0]?.ability.name}</h4>
                                <h4 className='poke-typetwo'>{pokemon.abilities?.[1]?.ability.name}</h4>
                            </div>
                        </section>
                    </section>

                </div>


                <div className='container-pokemon-right' >
                    <div className='encuentrame'>
                        <img src="" alt="" />
                        <h4>Encuentrame</h4>
                    </div>

                    <section className='movements'>
                        <h2>Movements</h2>
                        <div className='movements-item'>
                        {
                            pokemon.moves?.map(moves=>(
                                <h3>{moves.move.name}</h3>
                            ))
                        }
                        </div>
                    </section>
                </div>
                {/*<audio className='audio' autoPlay src={music}></audio> */}
            </div>
        </div>
    );
};

export default PokedexDatail;