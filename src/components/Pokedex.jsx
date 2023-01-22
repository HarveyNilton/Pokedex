import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import music from '../audio/pokemo-music.mp3'
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const userName = useSelector(state => state.userName)

    const [pokemon, setPokemon] = useState([])
    const [inputSearch , setInputSearch] = useState('')
    const [type, setType] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
    .then(res => setPokemon(res.data.results))

    axios.get(`https://pokeapi.co/api/v2/type/`)
    .then(res => setType(res.data.results))

    },[])

    const search=() =>{
        if (inputSearch !== ''  ) {
             navigate(`/pokemon/${inputSearch.toLowerCase()}`)
        }
       
    }

    const filterType =(e)=>{
        axios.get(e.target.value)
        .then(res => setPokemon(res.data.pokemon))
    }


    const [page ,setPage] = useState(1)
    const pokekarPage = 8
    const lastIndex = page * pokekarPage
    const firstIndex = lastIndex-pokekarPage
    const pokeSlice = pokemon.slice(firstIndex,lastIndex)

    const totalPage = Math.ceil(pokemon.length/pokekarPage)


    return (
        <div className='container-pokedex'>
            <h1>Pokédex</h1>
           {/*<audio className='audio' autoPlay src={music}></audio> */}
            <h5>Welcome: <span>{userName}</span><p>here you can find your favorite Pokemon</p> </h5>
            <div>
                <form className='input-pokedex'>
                     <form >
                        <input type="text" value={inputSearch} onChange={e=>setInputSearch(e.target.value)} placeholder='Name or Id'/>
                        <button onClick={search}>Search</button>
                     </form>
                    
                     <form>
                        <select onChange={filterType} id="" name="">
                            {
                                type.map(type=>(
                                    <option key={type.url} value={type.url}>{type.name}</option>
                                ))
                            }

                        </select>
                     </form>
                </form>
                
               
            </div>

            <div className='container-paginacion'>

                <button onClick={()=>setPage(page-1)} disabled={page===1}>{'<'}</button>
                {page} / {totalPage}
                <button onClick={()=>setPage(page+1)} disabled={page===totalPage}>{'>'}</button>

            </div>
            <ul className='ul-card'>
                {
                    pokeSlice?.map(pokemon =>(
                        <PokemonCard url = {pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default Pokedex;