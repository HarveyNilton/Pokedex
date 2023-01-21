import React from 'react';
import music from '../audio/detal.mp3'

const PokedexDatail = () => {
    return (
        <div>

        <audio className='audio' autoPlay src={music}></audio>
            
        </div>
    );
};

export default PokedexDatail;