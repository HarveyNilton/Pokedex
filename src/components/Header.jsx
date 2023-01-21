import React from 'react';
import pokeboll from '/pokeboll.png'
import pokedexLogo from '/pokedex-logo.png'


const Header = () => {
    return (
        <div className='header'>

                <img className='pokedex-svg'src={pokedexLogo} alt="" />
                <div className='container-black'></div>
                <img className='pokebola' src={pokeboll} alt="" />
               
               
        </div>
    );
};

export default Header;